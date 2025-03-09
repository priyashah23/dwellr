import logging
from flask import Flask, jsonify
from flaskext.mysql import MySQL
import os

app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = os.environ.get('MYSQL_USER', 'root')
app.config['MYSQL_DATABASE_PASSWORD'] = os.environ.get('MYSQL_PASSWORD', 'root')
app.config['MYSQL_DATABASE_DB'] = os.environ.get('MYSQL_DATABASE', 'dwellr')
app.config['MYSQL_DATABASE_HOST'] = os.environ.get('MYSQL_HOST', 'db')
mysql.init_app(app)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.route("/")
def migration():
    conn = mysql.connect()
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS listings (
            listing_id  INT PRIMARY KEY
            property_name      VARCHAR(255)
            number_of_bedrooms INT         
            image_link         TEXT        
            is_new             TINYINT     
            property_type      VARCHAR(255)
            price              INT         
            longitude          DECIMAL
            latitude           DECIMAL
        )
    ''')

    cursor.execute("""
        INSERT INTO listings
        VALUES
    (70807696, '23 Baker Street, Belfast G1 1DA', 4, 'https://lc.zoocdn.com/4e31c19a29b7bd25efcbd561582aae58b1b6f9c6.jpg', 0, 'TERRACED', 143535, 52.82644, -0.663736),
    (17397437, '48 High Street, Cardiff SW1A 1AA', 4, 'https://lc.zoocdn.com/e0d5c832cf3031fae08cc6c7e2a6833f20b418dc.png', 0, 'SEMI_DETATCHED', 964818, 56.731166, 0.64357),
    (98067257, '43 Main Street, Belfast G1 1DA', 3, 'https://lc.zoocdn.com/579605f05725f4f06bf80a819e2f1f292e869048.jpg', 1, 'DETACHED', 422993, 52.150414, 0.441627),
    (12125381, '66 Oxford Street, London M1 1AE', 3, 'https://lc.zoocdn.com/a5cef01e03f4cf178080711241576073f595ffa6.jpg', 0, 'SEMI_DETACHED', 659937, 57.580933, -4.50132),
    (88461544, '7 Elm Grove, Aberdeen L1 8JQ', 2, 'https://lc.zoocdn.com/f5508d168e28e772f7780dd040b2922336422ffd.jpg', 1, 'DETACHED', 647019, 51.218575, -2.053082),
    (38463857, '64 High Street, Edinburgh G1 1DA', 4, 'https://lc.zoocdn.com/02b89de74683812a9a3948c667f744e8d14dd8ab.jpg', 0, 'FLAT', 110637, 53.728862, -0.750405),
    (41154556, '41 Church Lane, Leeds SW1A 1AA', 2, 'https://lc.zoocdn.com/06680b6c1db7feda66433223ae09d254f01ee568.jpg', 1, 'SEMI_DETACHED', 531818, 53.384764, -3.0688),
    (79384872, '43 Station Road, Liverpool M1 1AE', 2, 'https://lc.zoocdn.com/30159b579054bbafa6ce3b645859db8799de91d7.jpg', 1, 'SEMI_DETACHED', 949388, 50.540664, 0.59417),
    (67141052, '38 Park Avenue, Birmingham M1 1AE', 2, 'https://lc.zoocdn.com/24098f2b89df16362a81764b16a9fa5b5f55fb6f.jpg', 0, 'SEMI_DETACHED', 171673, 50.165828, -1.731593),
    (51139801, '52 Park Avenue, Manchester G1 1DA', 1, 'https://lc.zoocdn.com/b1daf70220aa9ca9f5be3fa5f5e12503bea6b621.jpg', 0, 'FLAT', 587627, 57.892277, 0.212499),
    (81170005, '85 Victoria Road, Cardiff CF10 1EP', 3, 'https://lc.zoocdn.com/5a876f422604b9e9b74dc2991824fa08437f7896.jpg', 1, 'TERRACED', 226910, 54.719724, -4.705013),
    (67158982, '69 Elm Grove, Belfast G1 1DA', 1, 'https://lc.zoocdn.com/326c0b313168a68e31223de93f55db2512a620da.jpg', 1, 'TERRACED', 215241, 56.134452, -3.050443),
    (29144218, '10 King''s Road, Birmingham E1 6AN', 1, 'https://lc.zoocdn.com/c8d042d1c0de51bcb152db10d9508bca9677f804.jpg', 1, 'FLAT', 751302, 55.311347, 1.482035),
    (94319548, '24 King''s Road, Manchester EH1 1YZ', 4, 'https://lc.zoocdn.com/47fb991329276374057d039e15e40488c9a98eab.jpg', 1, 'BUNGALOW', 467732, 52.991841, -0.742827),
    (40632671, '31 Baker Street, Cardiff CF10 1EP', 3, 'https://lc.zoocdn.com/1e30aff491cd5c79a480a3ed0cfb4e0270.jpg', 1, 'BUNGALOW', 909700, 55.289432, 1.30191),
    (34143742, '41 Main Street, Liverpool AB10 1AN', 4, 'https://lc.zoocdn.com/6eb89d6d8b50bcf7228df63b1feafcff9bd6aa9c.jpg', 1, 'TERRACED', 519393, 57.670204, -4.94129),
    (34859784, '84 Elm Grove, Cardiff L1 8JQ', 5, 'https://lc.zoocdn.com/ecfd0f4cd9b96fd420cbd024d6c36e9a3e11e36b.jpg', 1, 'DETACHED', 385221, 54.432622, 0.75021),
    (18598198, '36 Station Road, Liverpool B1 1AA', 5, 'https://lc.zoocdn.com/ecfd0f4cd9b96fd420cbd024d6c36e9a3e11e36b.jpg', 1, 'DETACHED', 385221, 54.432622, 0.75021),
    (33687851, '30 Church Lane, London M1 1AE', 4, 'https://lc.zoocdn.com/a366450e3b42aba96db157d54b18652dce91ecf8.jpg', 0, 'SEMI_DETACHED', 399726, 57.543507, 1.34058),
    (87194697, '37 Station Road, Aberdeen CF10 1EP', 4, 'https://lc.zoocdn.com/8312c22244ecec1b8c1cd5be9069558ffc090661.jpg', 0, 'TERRACED', 164646, 56.578524, -0.937664),
    (23914386, '78 Park Avenue, Edinburgh E1 6AN', 1, 'https://lc.zoocdn.com/3cf5f7b2bdd592d4783550ce16b6b9373fc2d5ae.png', 1, 'BUNGALOW', 384100, 51.723819, -3.852709),
    (98425541, '54 Oxford Street, Belfast E1 6AN', 1, 'https://lc.zoocdn.com/9404c5b813f1990761bef46073f58cbcab2f5fa3.jpg', 0, 'TERRACED', 294448, 55.297527, -2.113326),
    (29030319, '9 Main Street, Leeds CF10 1EP', 1, 'https://lc.zoocdn.com/6c9d53d22a0b05c2bfcc74dee896705d29220c7b.jpg', 0, 'FLAT', 176816, 56.424189, -4.511824),
    (58494439, '59 Station Road, Manchester M1 1AE', 1, 'https://lc.zoocdn.com/28758377307b3186ba8695f4fa0d966f70abe534.jpg', 1, 'DETACHED', 450518, 53.807119, -0.16051),
    (92739202, '90 Elm Grove, Liverpool B1 1AA', 3, 'https://lc.zoocdn.com/73281f7522950ec86b5f8965ae0593c0b749f178.jpg', 1, 'BUNGALOW', 852914, 57.375958, 1.133669),
    (19900045, '4 Baker Street, Liverpool SW1A 1AA', 3, 'https://lc.zoocdn.com/e217d8bcd11c8863300b65de03ede597fa32d88c.jpg', 0, 'DETACHED', 973297, 50.537337, -3.076014),
    (20633758, '81 King''s Road, Cardiff G1 1DA', 3, 'https://lc.zoocdn.com/c065228ed65ebc55b14d698a2cc09fb80f7adf5d.jpg', 1, 'FLAT', 351023, 54.314938, 0.318197),
    (11239761, '88 King''s Road, London G1 1DA', 1, 'https://lc.zoocdn.com/c9d692240e382e844e4e661908f59d4d0c50b285.jpg', 0, 'FLAT', 428506, 52.542529, -0.100961),
    (16982300, '13 Station Road, Manchester EH1 1YZ', 1, 'https://lc.zoocdn.com/8ffe90f31c0165877a3f882373c1b8275e1ccd92.jpg', 1, 'BUNGALOW', 719802, 50.671656, -0.370032),
    (90335506, '86 High Street, Glasgow BT1 5GS', 4, 'https://lc.zoocdn.com/fbc7e31a5604f24769627338bd7d09ffaae68855.jpg', 0, 'SEMI_DETACHED', 451281, 51.280352, -0.852342),
    (66661460, '54 Oxford Street, Edinburgh EH1 1YZ', 1, 'https://lc.zoocdn.com/6de71cdb14c0a19724b40e45f701442704e43f8c.jpg', 0, 'DETACHED', 949891, 55.808355, -1.055046),
    (85011394, '57 Church Lane, Birmingham BT1 5GS', 2, 'https://lc.zoocdn.com/9c2eca67a832abc6a1fe317453a869c282ad872f.jpg', 0, 'DETACHED', 775669, 57.270653, 0.779234),
    (28729242, '31 Main Street, Edinburgh B1 1AA', 4, 'https://lc.zoocdn.com/1b08ce2180e2ea5f45f31055b915a83676f6dc29.jpg', 0, 'SEMI_DETACHED', 157005, 57.099625, -1.714923),
    (28920186, '37 Oxford Street, Belfast EH1 1YZ', 2, 'https://lc.zoocdn.com/82b378e4912195e9040512d938c1d05ebbfba231.jpg', 0, 'TERRACED', 577438, 51.797297, -0.415337),
    (25551299, '34 Victoria Road, London M1 1AE', 1, 'https://lc.zoocdn.com/42591e82820f2a793fc11b6d92a296d8d43b5ad9.jpg', 0, 'FLAT', 379943, 51.950966, -2.484293),
    (35930615, '70 King''s Road, Glasgow CF10 1EP', 4, 'https://lc.zoocdn.com/90a970f45d15a9d2ab261d96c4e4d5c52ddb29ce.jpg', 1, 'SEMI_DETACHED', 686873, 51.845996, -4.192117),
    (46639920, '34 Church Lane, Leeds EH1 1YZ', 5, 'https://lc.zoocdn.com/7499b1efa25cecc633026e8b89b9aae323434766.jpg', 0, 'TERRACED', 386112, 50.057371, -3.097903),
    (56557890, '15 King''s Road, Leeds EH1 1YZ', 4, 'https://lc.zoocdn.com/8f6ca25d4ecf503566e94e978be148856181ad6b.jpg', 1, 'FLAT', 418504, 56.788991, -3.117704),
    (65791375, '61 Elm Grove, Manchester SW1A 1AA', 1, 'https://lc.zoocdn.com/b63bcf70b6505817a6219b7def4024bf68bc014c.jpg', 1, 'DETACHED', 361527, 56.544732, -4.378984),
    (45187752, '69 Church Lane, Cardiff E1 6AN', 2, 'https://lc.zoocdn.com/2eb04b0adfd400243d3188631a0861eb6e8df674.jpg', 0, 'SEMI_DETACHED', 859488, 53.403776, -4.189935),
    (57625859, '44 Elm Grove, Birmingham G1 1DA', 3, 'https://lc.zoocdn.com/634ad21ea9c0985eca4d2e0908d76b3f5fa85d75.jpg', 0, 'DETACHED', 325411, 50.920451, -4.800977),
    (69842781, '97 Victoria Road, Liverpool M1 1AE', 3, 'https://lc.zoocdn.com/78f754d969424686341caab3153585daebf0a518.jpg', 0, 'TERRACED', 466537, 56.494073, -0.953406),
    (37516257, '66 Baker Street, Birmingham B1 1AA', 3, 'https://lc.zoocdn.com/bea14e77e14668b5950bf09190f0dad05132e90f.jpg', 0, 'SEMI_DETACHED', 957655, 53.797371, -1.860194),
    (68552558, '8 Park Avenue, Birmingham CF10 1EP', 2, 'https://lc.zoocdn.com/84c96378381a0ff8f526d149af2cad0cf5891efc.jpg', 1, 'BUNGALOW', 856424, 53.672607, -2.75875),
    (60278020, '36 Station Road, Birmingham L1 8JQ', 2, 'https://lc.zoocdn.com/d642ce897516a1085f12ba9d705b674446688461.jpg', 0, 'FLAT', 493914, 56.573446, -3.992394),
    (27880569, '94 King''s Road, Belfast EH1 1YZ', 1, 'https://lc.zoocdn.com/4af54c33c64129b51563ba6a31c122439bea75c3.jpg', 1, 'FLAT', 461167, 52.431023, 0.6041),
    (53136747, '87 Church Lane, Belfast CF10 1EP', 4, 'https://lc.zoocdn.com/cb97add4cddbb1b746dd5874a83b057e0d13a0d5.jpg', 0, 'FLAT', 446013, 56.115478, -0.774194),
    (43467847, '96 Baker Street, Manchester SW1A 1AA', 4, 'https://lc.zoocdn.com/3474a8f46af6b37c14bef2774c89ad03fbbbc926.jpg', 1, 'SEMI_DETACHED', 573798, 51.468523, 0.767301),
    (21853611, '44 Church Lane, Aberdeen BT1 5GS', 4, 'https://lc.zoocdn.com/f5d4aa0f55bdf67e601f299704b7d61e587d2863.jpg', 1, 'TERRACED', 676319, 55.116493, -0.011403)
    ON CONFLICT DO NOTHING;
    """)

    cursor.close()
    conn.close()

@app.route("/user/create-user", methods=['POST'])
def create_user():
    conn = mysql.connect()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT * FROM listings LIMIT 1;
    ''')

@app.route("/property", methods=['GET'])
def get_property(): 
    conn = mysql.connect()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT * FROM listings LIMIT 1;
    ''')

    result = cursor.fetchall()
    columns = [desc[0] for desc in cursor.description]
    data = [dict(zip(columns, row)) for row in result]

    cursor.close()
    conn.close()
    return jsonify(data)

@app.route("/user/<user_id>", methods=['GET'])
def get_quiz_question():
    question_dict = {"question_id": 0}
    return question_dict

@app.route("/user/<user_id>/preferences", methods=['POST'])
def post_preferences():
    pass

@app.route("/user/<user_id>/preferences", methods=['PUT'])
def update_preferences():
    pass

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
