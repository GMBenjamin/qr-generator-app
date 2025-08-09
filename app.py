from flask import Flask, render_template, request, send_file
import qrcode

app = Flask(__name__)

def check(name, security, password, hidden):
    if (len(name) < 1) or (len(name) > 32):
        return False
    if security not in ["WPA","WEP"]:
        return False
    if hidden not in ["yes","no"]:
        return False
    if len(password) < 1:
        return False
    return True

def generateQR(name, security, password, hidden):
    if hidden == True:
        data = "WIFI:S:"+name+";T:"+security+";P:"+password+";H:true;"
    else:
        data = "WIFI:S:"+name+";T:"+security+";P:"+password+";;"
    qr_img = qrcode.make(data)
    qr_path = "static/qr.png"
    qr_img.save(qr_path)
    
@app.route("/", methods = ["GET", "POST"])
def home():
    if request.method == "POST":
        red = request.form.get("Nombre")
        clave = request.form.get("Clave")
        seguridad = request.form.get("Seguridad")
        oculta = request.form.get("oculta")
        if check(red, seguridad, clave, oculta) == True:
            generateQR(red, seguridad, clave, True if oculta=="yes" else False)
            return render_template("index.html", qr_code="qr.png")
    return render_template("index.html")
