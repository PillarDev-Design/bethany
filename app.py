#==============================================================================#
# app.py                                                                       #
#==============================================================================#
# Imports
import flask, datetime, json, re, pymongo
from backend import settings

#==============================================================================#
# Setup Flask App                                                              #
#==============================================================================#
app = flask.Flask(__name__)

# DB Connections
DB_CONNECTION = pymongo.Connection('localhost', 27017)
DB = DB_CONNECTION.bethany

PORT = getattr(settings, 'PORT', 8080)
ENV = getattr(settings, 'ENV', 'develop')

#==============================================================================#
# Utility Call Functions                                                       #
#==============================================================================#
def home_database_calls():
    #--------------------------------------------------------------------------#
    # Declare Return Variables                                                 #
    #--------------------------------------------------------------------------#
    # Notes
    all_notes = []
    # Projects
    all_projects = []
    categories = {}
    
    #--------------------------------------------------------------------------#
    # Access All Available Notes by newest post date                           #
    #--------------------------------------------------------------------------#
    all_db_notes = DB.notes.find().sort('post_date', -1)
    
    for note in all_db_notes:
        note.pop('_id')
        all_notes.append(note)
    
    all_db_projects = DB.projects.find().sort('post_date', -1)

    for project in all_db_projects:
        project.pop('_id')
        all_projects.append(project)
        
        try:
            categories[project['category']]['num'] += 1
        except KeyError:
            categories[project['category']] = {}
            categories[project['category']]['num'] = 1
            categories[project['category']][
                'pretty_name'] = project['category'].replace('_', ' ').capitalize()

    return (all_notes, all_projects, categories)


#==============================================================================#
# Static Endpoints                                                             #
#==============================================================================#
# Base Render Function
#   - Everything gets passed through here
def render_skeleton(template_name='index.html', **kwargs):
    return flask.render_template(template_name, **kwargs)
#------------------------------------------------------------------------------#
# Home                                                                         #
#------------------------------------------------------------------------------#
@app.route('/')
def home():
    # Empty Return Dictionary
    ret = {}
    template_name = 'home.html'
    
    #--------------------------------------------------------------------------#
    # What do we need? (Dynamic Content)                                       #
    #   - We're going to need the last 'note'.                                 #
    #   - We're going to need every category of 'projects'.                    #
    #   - We're going to need the 2 newest of every project.                   #
    #--------------------------------------------------------------------------#
    all_notes = []
    all_projects = []
    categories = {}

    all_notes, all_projects, ret['categories'] = home_database_calls()
    ret['latest_note'] = all_notes[0:1]
    ret['all_projects'] = all_projects

    return render_skeleton(template_name, **ret)
    
#------------------------------------------------------------------------------#
# Projects                                                                     #
#------------------------------------------------------------------------------#
@app.route('/projects/<category>/')
@app.route('/projects/<category>/<slug>/')
def projects(category=None, slug=None):
    #--------------------------------------------------------------------------#
    # Declare Return Dictionary                                                #
    #--------------------------------------------------------------------------#
    ret = {
        'projects': [],
        'project': False,
        'categories': {}
        }
    # Default Return Template
    template_name = 'project_category.html'

    #--------------------------------------------------------------------------#
    # Get Page Based On Query                                                  #
    #--------------------------------------------------------------------------#
    # Category Page
    if category is not None and slug is None:
        db_projects = DB.projects.find({'category':category}).sort('post_date', -1)
    # Single Project Page
    elif category is not None and slug is not None:
        db_projects = DB.projects.find({'slug':slug}).sort('post_date', -1)
        template_name = 'project_single.html'

    #--------------------------------------------------------------------------#
    # Setup Response                                                           #
    #--------------------------------------------------------------------------#
    for project in db_projects:
        project.pop('_id')
        ret['projects'].append(project)

    return render_skeleton(template_name, **ret)

#==============================================================================#
# Run Server                                                                   #
#==============================================================================#
if __name__ == "__main__":
    if ENV == 'develop':
        app.debug = True
        app.run(port=PORT)
