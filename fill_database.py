from database import *
from datetime import datetime


#Roles
roles = ['Пользователь', 'Фермер', 'Администратор']
for role in roles:
    row = Role(role_name=role)
    row.save()

#Users
users = [['Покупатель', 'Авито', 1], ['Фермер', 'Борис', 2], ['Админ', 'Суперадмин', 3]]
for user in users:
    row = User(first_name=user[0], last_name=user[1], email='jd@gmail.com', password_hash='pass', phone='+79999992929',
           role_id=user[2], created_at=datetime.now(), subscription_on=False, subscription_id=None)
    row.save()
    
#Okved
row = Okved(code=47291, name='Торговля розничная молочными продуктами и яйцами в специализированных магазинах')
row.save()
row = Okved(code=1491, name='Пчеловодство')
row.save()
row = Okved(code=113, name='Выращивание овощей, бахчевых, корнеплодных и клубнеплодных культур, грибов и трюфелей')
row.save()

#OkvedList
for i in range(1, 4):
    row = OkvedList(id=1, okved_id=i, user_id=2)
    row.save()
    
# BankRequisition
row = BankRequisition(card_number='1234123412341234')
row.save()

# SubscriptionType
types = ['Год', 'Месяц', 'Неделя']
for type in types:
    row = SubscriptionType(type=type)
    row.save()
    
# DeliveryStatus
statuses = ['Создан', 'Обработан', 'Собран', 'В доставке', 'Доставлен']
for status in statuses:
    row = DeliveryStatus(status=status)
    row.save()
    
# DeliveryType
dtypes = ['Самовывоз', 'Доставка']
for dtype in dtypes:
    row = DeliveryType(type=dtype)
    row.save()
    
# ProductCategory
categories = ['молоко', 'грибы', 'мёд']
for category in categories:
    row = ProductCategory(name=category)
    row.save()
    
    
# OrderStatus
orders = ['Создан', 'Ждёт оплаты', 'Оплачен', 'Закрыт']
for order_status in orders:
    row = OrderStatus(status=order_status)
    row.save()
    
# Seller
row = Seller(user_id=1, card_number_id=1, last_order=1, is_ip=True, address='Улица Пушкина, дом Колотушкина')
row.save()

# Cart
row = Cart(user_id=1, total_price = 1000, seller_id = 1)
row.save()

# ItemsList ++ ДОБАВИТЬ COUNT
row = ItemsList(product_id = 1, user_id = 1)
row.save()
    
# Products
row = Products(name='Молочко Деревенское', price=100, category_id = 1, description = 'Молоко очень вкусное', seller_id='1',
              origin='С телочек Швейцарии', produced_at=datetime.now(), expiration_date=datetime.now(), 
              rating='3', license='LICENSE_ID_1', certificate='lksldfalvnaiwidfhaisudfh', picture=None)
row.save()
row = Products(name='Мухоморы', price=250, category_id = 2, description = 'Убирают усталость;)', seller_id='1',
              origin='Из Щелково', produced_at=datetime.now(), expiration_date=datetime.now(), 
              rating='4', license='LICENSE_ID_2', certificate='lksldfalvnaiwidfhaisudfha5', picture=None)
row.save()
row = Products(name='Мёд медовый', price=500, category_id = 3, description = 'Мёд-медок...', seller_id='1',
              origin='С лугов Балашихи', produced_at=datetime.now(), expiration_date=datetime.now(), 
              rating='5', license='LICENSE_ID_3', certificate='lksldfalvnaiwidfhaisudf33h', picture=None)
row.save()

# Order УДОЛИТЬ
row = Order(user_id=1, cart_id=1, status_id=2, delivery_type_id=1, delivery_status_id=1, closed=False)
row.save()

# Raiting
row = Raiting(product_id=2, rate=5, comment='Ахкительные грибы"', author_id=1)
row.save()

# StarredProduct
row = StarredProduct(product_id=1, user_id=1)
row.save()
row = StarredProduct(product_id=2, user_id=1)
row.save()

# Subscription
row = Subscription(user_id=1, item=1, count=10, price=1000, subscription_type_id=3, delivery_type_id=2, card_number_id=1)
row.save()

# Chat
row = Chat(users_first_id=1, users_second_id=2)
row.save()

# Message
row = Message(chat_id=1, sender_id=1, time=20230526)
row.save()