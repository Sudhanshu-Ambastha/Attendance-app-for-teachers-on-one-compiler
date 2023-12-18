import pandas as pd
from datetime import datetime

class BakeryOrderManagement:
    def __init__(self):
        self.orders = pd.DataFrame()

    def add_order(self):
        customer_name = input("Enter customer name: ")
        item = input("Enter item ordered: ")
        quantity = int(input("Enter quantity: "))
        order_date = datetime.now()

        new_order = pd.DataFrame([{'CustomerName': customer_name, 'Item': item, 'Quantity': quantity, 'OrderDate': order_date}])
        self.orders = pd.concat([self.orders, new_order], ignore_index=True)

        print("Order added successfully!")

    def view_orders(self):
        if self.orders.empty:
            print("No orders available.")
        else:
            print(self.orders)

    def save_to_excel(self):
        self.orders.to_excel("bakery_orders.xlsx", index=False)
        print("Orders saved to 'bakery_orders.xlsx'.")

# Using the system
order_system = BakeryOrderManagement()

while True:
    print("\n1. Add Order\n2. View Orders\n3. Save to Excel\n4. Exit")
    choice = input("Enter your choice (1/2/3/4): ")

    if choice == '1':
        order_system.add_order()
    elif choice == '2':
        order_system.view_orders()
    elif choice == '3':
        order_system.save_to_excel()
    elif choice == '4':
        break
    else:
        print("Invalid choice.")

