
function createOrderManager() {
   
    let orders = [];
  
    return {
      addOrder(order) {
        orders.push(order);
      },
  
      updateOrder(id, newStatus) {
        const order = orders.find(o => o.id === id);
        if (order) {
          order.status = newStatus;
        }
      },
  
      filterOrders(status) {
        return orders.filter(order => order.status === status);
      },

      sortOrders(by) {
        const sortedOrders = [...orders];
    if (by === "date") {
          sortedOrders.sort((a, b) => a.createdAt - b.createdAt);
        } else if (by === "status") {
          sortedOrders.sort((a, b) => a.status.localeCompare(b.status));
        }
        return sortedOrders;
      },
  
      getTotalRevenue() {
        return orders.reduce((total, order) => {
          const orderTotal = order.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
          }, 0);
          return total + orderTotal;
        }, 0);
      },
  
      exportOrders() {
        return JSON.stringify(orders, null, 2); 
      }
    };
  }
  
  const manager = createOrderManager();
  
  manager.addOrder({
    id: 1,
    customerName: "Alice",
    items: [
      { name: "Laptop", price: 1000, quantity: 1 }
    ],
    status: "pending",
    createdAt: new Date("2024-03-01")
  });
  
  manager.addOrder({
    id: 2,
    customerName: "Bob",
    items: [
      { name: "Phone", price: 500, quantity: 2 }
    ],
    status: "shipped",
    createdAt: new Date("2024-03-02")
  });

  console.log("Filtered Orders (pending):", manager.filterOrders("pending"));
  
  console.log("Total Revenue:", manager.getTotalRevenue()); 
 