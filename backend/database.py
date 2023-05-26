from peewee import *
from time import sleep

db = SqliteDatabase('../db.sqlite3')


class BaseModel(db.Model):
    class Meta:
        database = db


class Role(BaseModel):
    id = IntegerField(primary_key=True)
    role_name = CharField()


class BankRequisition(BaseModel):
    id = IntegerField(primary_key=True)
    card_number = CharField()


class SubscriptionType(BaseModel):
    id = IntegerField(primary_key=True)
    type = CharField()


class Okved(BaseModel):
    id = IntegerField(primary_key=True)
    code = IntegerField()
    name = CharField()


class User(BaseModel):
    id = IntegerField(primary_key=True)
    first_name = CharField()
    last_name = CharField()
    email = CharField()
    password_hash = CharField()
    phone = CharField()
    role = ForeignKeyField(Role, field='id', backref='users')
    created_at = TimestampField()
    subscription_on = BooleanField()
    subscription_id = IntegerField(null=True)
    # starred_products = TextField(null=True)


class Seller(BaseModel):
    id = IntegerField(primary_key=True)
    user_id = ForeignKeyField(User, field='id', backref='sellers')
    card_number = ForeignKeyField(BankRequisition, field='id', backref='sellers')
    last_order = IntegerField(null=True)
    is_ip = BooleanField()
    address = CharField()


class OkvedList(BaseModel):
    id = IntegerField()
    okved = ForeignKeyField(Okved, field='id', backref='okved_lists')
    user_id = ForeignKeyField(User, field='id', backref='okved_lists')


class ProductCategory(BaseModel):
    id = IntegerField(primary_key=True)
    name = CharField()


class Products(BaseModel):
    id = IntegerField(primary_key=True)
    name = CharField()
    price = FloatField()
    category = ForeignKeyField(ProductCategory, field='id', backref='products')
    description = CharField(null=True)
    seller = ForeignKeyField(Seller, field='id', backref='products')
    origin = CharField(null=True)
    produced_at = TimestampField()
    expiration_date = TimestampField(null=True)
    rating = FloatField()	# Select from Reting by ProductId
    license = CharField(null=True)
    certificate = CharField(null=True)
    picture = TextField(null=True)

class Raiting(BaseModel):
    id = IntegerField(primary_key=True)
    product_id = ForeignKeyField(Products, field='id', backref='raiting')
    rate = IntegerField()
    comment = CharField()
    author = ForeignKeyField(User, field='id', backref='raiting')

class ItemsList(BaseModel):
    id = IntegerField()
    product = ForeignKeyField(Products, field='id', backref='items_lists')
    user_id = ForeignKeyField(User, field='id', backref='items_lists')


class StarredProduct(BaseModel):
    id = IntegerField()
    product = ForeignKeyField(Products, field='id', backref='starred_products')
    user_id = ForeignKeyField(User, field='id', backref='starred_products')


class Chat(BaseModel):
    id = IntegerField(primary_key=True)
    users_first = ForeignKeyField(User, field='id', backref='chats_first')
    users_second = ForeignKeyField(User, field='id', backref='chats_second')


class Message(BaseModel):
    id = IntegerField()
    chat = ForeignKeyField(Chat, field='id', backref='messages')
    sender = ForeignKeyField(User, field='id', backref='messages')
    time = TimestampField()


class DeliveryType(BaseModel):
    id = IntegerField(primary_key=True)
    type = CharField()


class Subscription(BaseModel):
    id = IntegerField(primary_key=True)
    user_id = ForeignKeyField(User, field='id', backref='subscriptions')
    item = TextField()
    count = IntegerField()
    price = FloatField()
    subscription_type = ForeignKeyField(SubscriptionType, field='id', backref='subscriptions')
    delivery_type = ForeignKeyField(DeliveryType, field='id', backref='subscriptions')
    card_number = ForeignKeyField(BankRequisition, field='id', backref='subscriptions')


class Cart(BaseModel):
    id = IntegerField(primary_key=True)
    user_id = ForeignKeyField(User, field='id', backref='carts')
    total_price = FloatField()
    seller = ForeignKeyField(Seller, field='id', backref='carts')


class OrderStatus(BaseModel):
    id = IntegerField(primary_key=True)
    status = CharField()


class DeliveryStatus(BaseModel):
    id = IntegerField(primary_key=True)
    status = CharField()


class Order(BaseModel):
    id = IntegerField(primary_key=True)
    user_id = ForeignKeyField(User, field='id', backref='orders')
    cart = ForeignKeyField(Cart, field='id', backref='orders')
    status = ForeignKeyField(OrderStatus, field='id', backref='orders', null=True)
    delivery_type = ForeignKeyField(DeliveryType, field='id', backref='orders', null=True)
    delivery_status = ForeignKeyField(DeliveryStatus, field='id', backref='orders', null=True)
    closed = BooleanField()

db.create_tables([
    Role, BankRequisition, SubscriptionType, Okved, User, Seller, OkvedList,
    ProductCategory, Products, ItemsList, StarredProduct, Chat, Message,
    Subscription, Cart, OrderStatus, DeliveryType, DeliveryStatus, Order, Raiting
])