import React from "react";
import Layout from "../../Layouts/Defautls";

export default function Index() {
    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">About Us</h1>
                <div className="card mb-4 bg-primary">
                    <h2 style={{ color: "white" }}>Toko Elektronik</h2>
                    <p style={{ color: "white" }}>Toko Elektronik adalah toko yang menyediakan beberapa barang elektronik seperti PC, HP dan Laptop</p>
                </div>
            </div>
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            Copyright &copy; IF2020B
                        </div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                crossOrigin="anonymous"
            ></script>
            <script src="js/scripts.js"></script>
        </Layout>
    );
}
