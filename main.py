from flask import Flask
from flask import render_template, request
import requests
from twilio.rest import Client

sid = 'xxxxx' #console page in twilio account
token = 'xxxxx'

client = Client(sid, token)
app = Flask(__name__, static_url_path='/static')


@app.route('/')
def registration_form():
    return render_template('registration.html')


@app.route('/register', methods=['POST', 'GET'])
def reg_page():
    first_name = request.form['fname']
    last_name = request.form['lname']
    email_id = request.form['email']
    source_st = request.form['source_state']
    source_dt = request.form['source']
    destination_st = request.form['dest_state']
    destination_dt = request.form['destination']
    phone_number = request.form['phoneNumber']
    id_proof = request.form['idcard']
    date = request.form['date']
    full_name = first_name + " " + last_name
    r = requests.get('https://api.covid19india.org/v4/data.json')
    json_data = r.json()
    cnt = json_data[destination_st]['districts'][destination_dt]['total']['confirmed']
    pop = json_data[destination_st]['districts'][destination_dt]['meta']['population']
    travel_pass = ((cnt / pop) * 100)
    if travel_pass < 30 and request.method == 'POST':
        status = 'CONFIRMED'
        client.messages.create(from_="whatsapp:+14155238886",
                               to="whatsapp:+91xxxxxxxxxx",
                               body="Hello " + " " + full_name + " " + "your  E-pass for travel during Covid-19 from "
                                    + source_dt + " " +
                                    "to" + " " + destination_dt + " "
                                    + "has been" + " " + status + "for" + " " + date)

        return render_template('display.html', var=full_name, var1=email_id, var2=id_proof,
                               var3=source_st, var4=source_dt, var5=destination_st, var6=destination_dt,
                               var7=phone_number, var8=date, var9=status)
    else:
        status = 'NOT CONFIRMED'
        client.messages.create(to="whatsapp:+91xxxxxxxxxx",
                               from_="whatsapp:+14155238886",
                               body="Hello " + " " + full_name + " " + "your E-pass for travel during Covid-19 from" +
                                    source_dt + " " +
                                    "to" + " " + destination_dt + " "
                                    + "has been" + " " + status + "for" + " " + date + " ")

        return render_template('display.html', var=full_name, var1=email_id, var2=id_proof,
                               var3=source_st, var4=source_dt, var5=destination_st, var6=destination_dt,
                               var7=phone_number, var8=date, var9=status)


if __name__ == '__main__':
    app.run(port=8000, debug=True)
