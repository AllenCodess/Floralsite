import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../slices/authSlice.js";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");

        if (res.status === 401) {
          dispatch(logout());
          navigate("/login");
          return;
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError("Could not load orders.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [dispatch, navigate]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    dispatch(logout());
    navigate("/login");
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });

  if (loading) return <p className="admin-message">Loading orders...</p>;
  if (error) return <p className="admin-message">{error}</p>;

  return (
    <section className="admin-orders">
      <div className="admin-header">
        <h1 className="admin-title">Orders ({orders.length})</h1>
        <button className="admin-logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="admin-message">No orders yet.</p>
      ) : (
        <div className="admin-order-list">
          {orders.map((order) => (
            <div className="admin-order-card" key={order._id}>
              <div className="admin-order-top">
                <span className="admin-order-id">#{order._id}</span>
                <span className="admin-order-total">${order.total.toFixed(2)}</span>
              </div>

              <p className="admin-delivery">
                <strong>Deliver:</strong> {formatDate(order.deliveryDate)}
              </p>

              <div className="admin-order-grid">
                <div>
                  <h3>Customer</h3>
                  <p>
                    {order.firstName} {order.lastName}
                  </p>
                  <p>{order.email}</p>
                  <p>{order.phoneNumber}</p>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>{order.address}</p>
                  <p>
                    {order.city}, {order.postalCode}
                  </p>
                </div>
                <div>
                  <h3>Items</h3>
                  {order.items.map((item) => (
                    <p key={item._id}>
                      {item.name} × {item.quantity}
                    </p>
                  ))}
                </div>
              </div>

              {order.deliveryInstructions && (
                <p className="admin-instructions">
                  <strong>Instructions:</strong> {order.deliveryInstructions}
                </p>
              )}

              <p className="admin-placed">Placed {formatDate(order.createdAt)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AdminOrders;
