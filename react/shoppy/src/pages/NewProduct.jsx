import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NewProduct() {
  const [product, setProduct] = useState({});
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*10"
      </form>
    </section>
  );
}
