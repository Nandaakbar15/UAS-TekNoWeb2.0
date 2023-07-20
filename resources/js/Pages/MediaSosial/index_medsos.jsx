import React from "react";
import Layout from "../../Layouts/Defautls";

export default function Index() {
    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Media Sosial</h1>
                <div className="card bg-primary" style={{ width: "18 rem" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "white" }}>Our Media Social</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary" style={{ color: "white" }}>
                            Follow Us
                        </h6>
                        <p className="card-text" style={{ color: "white" }}>Instagram : @tokoelektronik</p>
                        <img src="/img/instagram.png" alt="" width={"68"} height={"60"}/>
                        <br />
                        <p className="card-text" style={{ color: "white" }}>
                            Twitter : @tokoelektronik_10
                        </p>{" "}
                        <img src="/img/twitter.png" alt="" width={"80"} height={"80"}/>
                    </div>
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
