from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, ForeignKey, Text
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.sql.sqltypes import DateTime

engine = create_engine('sqlite:///db.sqlite3', echo=True)
Base = declarative_base(bind=engine)


class BaseModel:
    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower()


class Role(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    role_name = Column(String)


class BankRequisition(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    card_number = Column(String)


class SubscriptionType(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    type = Column(String)


class Okved(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    code = Column(Integer)
    name = Column(String)


class Users(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String)
    password_hash = Column(String)
    phone = Column(String)
    role_id = Column(Integer, ForeignKey('role.id'))
    role = relationship(Role, backref='users')
    created_at = Column(DateTime)
    subscription_on = Column(Boolean)
    subscription_id = Column(Integer, nullable=True)


class Seller(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='sellers')
    card_number_id = Column(Integer, ForeignKey('bankrequisition.id'))
    card_number = relationship(BankRequisition, backref='sellers')
    last_order = Column(Integer, nullable=True)
    is_ip = Column(Boolean)
    address = Column(String)


class OkvedList(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    okved_id = Column(Integer, ForeignKey('okved.id'))
    okved = relationship(Okved, backref='okved_lists')
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='okved_lists')


class ProductCategory(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    name = Column(String)


class Products(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    name = Column(String)
    price = Column(Float)
    category_id = Column(Integer, ForeignKey('productcategory.id'))
    category = relationship(ProductCategory, backref='products')
    description = Column(String)
    seller_id = Column(Integer, ForeignKey('seller.id'))
    seller = relationship(Seller, backref='products')
    origin = Column(String)
    produced_at = Column(DateTime)
    expiration_date = Column(DateTime)
    rating = Column(Float)
    license = Column(String)
    certificate = Column(String)
    picture = Column(Text)


class Rating(Base, BaseModel):
    product_id = Column(Integer, ForeignKey('products.id'))
    product = relationship(Products, backref='raiting')
    rate = Column(Integer)
    comment = Column(String)
    author_id = Column(Integer, ForeignKey('users.id'))
    author = relationship(Users, backref='raiting')


class ItemsList(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    product = relationship(Products, backref='items_lists')
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='items_lists')


class StarredProduct(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    product = relationship(Products, backref='starred_products')
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='starred_products')


class Chat(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    user_first_id = Column(Integer, ForeignKey('users.id'))
    user_first = relationship(Users, foreign_keys=[user_first_id], backref='chats_first')
    user_second_id = Column(Integer, ForeignKey('users.id'))
    user_second = relationship(Users, foreign_keys=[user_second_id], backref='chats_second')


class Message(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    chat_id = Column(Integer, ForeignKey('chat.id'))
    chat = relationship(Chat, backref='messages')
    sender_id = Column(Integer, ForeignKey('users.id'))
    sender = relationship(Users, backref='messages')
    time = Column(DateTime)


class DeliveryType(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    type = Column(String)


class Subscription(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='subscriptions')
    item = Column(Text)
    count = Column(Integer)
    price = Column(Float)
    subscription_type_id = Column(Integer, ForeignKey('subscriptiontype.id'), nullable=True)
    subscription_type = relationship(SubscriptionType, backref='subscriptions')
    delivery_type_id = Column(Integer, ForeignKey('deliverytype.id'), nullable=True)
    delivery_type = relationship(DeliveryType, backref='subscriptions')
    card_number_id = Column(Integer, ForeignKey('bankrequisition.id'), nullable=True)
    card_number = relationship(BankRequisition, backref='subscriptions')


class Cart(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='carts')
    total_price = Column(Float)
    seller_id = Column(Integer, ForeignKey('seller.id'))
    seller = relationship(Seller, backref='carts')


class OrderStatus(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    status = Column(String)


class DeliveryStatus(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    status = Column(String)


class Order(Base, BaseModel):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship(Users, backref='orders', nullable=True)
    cart_id = Column(Integer, ForeignKey('cart.id'), nullable=True)
    cart = relationship(Cart, backref='orders', nullable=True)
    status_id = Column(Integer, ForeignKey('orderstatus.id'), nullable=True)
    status = relationship(OrderStatus, backref='orders', nullable=True)
    delivery_type_id = Column(Integer, ForeignKey('deliverytype.id'), nullable=True)
    delivery_type = relationship(DeliveryType, backref='orders', nullable=True)
    delivery_status_id = Column(Integer, ForeignKey('deliverystatus.id'), nullable=True)
    delivery_status = relationship(DeliveryStatus, backref='orders', nullable=True)
    closed = Column(Boolean)


Base.metadata.create_all()