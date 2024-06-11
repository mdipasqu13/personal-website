
# from flask import Flask, jsonify, request
# from flask_restful import Resource
# from config import app, db, api


# app = Flask(__name__)

# # Personal Information
# personal_info = {
#     "name": "Michael DiPasquale",
#     "title": "Software Engineer",
#     "about": "A brief description about yourself",
#     "skills": ["Python", "JavaScript", "React", "Flask", ...],
#     "links": {
#         "linkedin": "https://www.linkedin.com/in/your-username",
#         "medium": "https://medium.com/@your-username"
#     }
# }

# # Projects
# projects = [
#     {
#         "name": "Project 1",
#         "description": "A brief description of the project",
#         "technologies": ["React", "Node.js", ...],
#         "link": "https://github.com/your-username/project1",
#         "demo": "https://project1.example.com"
#     },
#     {
#         "name": "Project 2",
#         "description": "A brief description of the project",
#         "technologies": ["Python", "Flask", ...],
#         "link": "https://github.com/your-username/project2",
#         "demo": "https://project2.example.com"
#     },
#     # Add more projects as needed
# ]
# @app.route('/')
# def index():
#     return '<h1>Project Server</h1>'

# @app.route('/api/personal-info', methods=['GET'])
# def get_personal_info():
#     return jsonify(personal_info)

# @app.route('/api/projects', methods=['GET'])
# def get_projects():
#     return jsonify(projects)




# if __name__ == '__main__':
#     app.run(port=5555, debug=True)