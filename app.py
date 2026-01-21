#database project, git fixed
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/hello')
def hello():
    return {'message': 'Hello from the backend!'}

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')