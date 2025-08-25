import axios from "../../../../Api/axios";

const addToCart = async (item) => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("⚠️ Please login to add items to your cart.");
    return;
  }

  try {
    await axios.post("/api/cart", {
      userId,
      items: [
        {
          title: item.title,
          price: Number(item.price),
          quantity: 1,
        },
      ],
    });

    // ✅ Accurate cart count from backend
    const cartRes = await axios.get(`/api/cart/${userId}`);
    const updatedCount = cartRes.data.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    localStorage.setItem("cartCount", updatedCount);

    console.log("✅ Item added to cart successfully.");
  } catch (error) {
    console.error("❌ Failed to add to cart:", error.response?.data || error.message);
  }
};

export default addToCart;
