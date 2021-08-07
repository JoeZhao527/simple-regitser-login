from value_eat import db
db.drop_all()
db.create_all()

#diner1 = Diner(firstname="joe", lastname="zhao", email="aaaa")
#db.session.add(diner1)

print(db.engine.table_names())