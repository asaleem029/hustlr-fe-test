import { Link } from "react-router-dom";

export default function ProductGrid({ products, addProduct }) {
    return (
        <section className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {products.map((p) => (
                    <div className="col d-flex" key={p.id}>
                        <div
                            className="card h-100 w-100 border-0 d-flex flex-column overflow-hidden"
                            style={{
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                borderRadius: "12px",
                                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.18)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0) scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                            }}
                        >
                            {/* Image */}
                            <div className="ratio ratio-1x1 bg-light">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="card-img-top p-3"
                                    style={{
                                        objectFit: "contain",
                                        transition: "transform 0.3s ease",
                                    }}
                                    loading="lazy"
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "data:image/svg+xml;charset=UTF-8," +
                                            encodeURIComponent(
                                                `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>
                      <rect width='100%' height='100%' fill='#f8f9fa'/>
                      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                            fill='#6c757d' font-family='Arial' font-size='20'>No Image</text>
                    </svg>`
                                            );
                                    }}
                                />
                            </div>

                            {/* Body */}
                            <div className="card-body d-flex flex-column">
                                <h5
                                    className="card-title mb-2"
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "1.1rem",
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "2",
                                        WebkitBoxOrient: "vertical",
                                    }}
                                    title={p.title}
                                >
                                    {p.title}
                                </h5>
                                <p
                                    className="card-text text-muted small mb-3"
                                    style={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "3",
                                        WebkitBoxOrient: "vertical",
                                    }}
                                    title={p.description}
                                >
                                    {p.description}
                                </p>

                                {/* Price row */}
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <span className="fw-semibold">Price</span>
                                    <span className="lead mb-0 text-success">
                                        {Intl.NumberFormat(undefined, {
                                            style: "currency",
                                            currency: "USD",
                                            maximumFractionDigits: 2,
                                        }).format(Number(p.price))}
                                    </span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="card-footer bg-transparent border-0 mt-auto p-3">
                                <div className="d-grid gap-2 d-sm-flex">
                                    <Link
                                        to={`/product/${p.id}`}
                                        className="btn btn-dark flex-grow-1"
                                        aria-label={`Buy ${p.title} now`}
                                        style={{ borderRadius: "8px" }}
                                    >
                                        Buy Now
                                    </Link>
                                    <button
                                        className="btn btn-outline-dark flex-grow-1"
                                        style={{ borderRadius: "8px" }}
                                        onClick={() => addProduct(p)}
                                        aria-label={`Add ${p.title} to cart`}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
