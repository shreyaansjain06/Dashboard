from flask import Flask, jsonify
import csv
app = Flask (__name__)

csv_file_path = './data.csv'
@app.route ("/members")
def members():
    data = []
    with open(csv_file_path, 'r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            data.append(row)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)


    