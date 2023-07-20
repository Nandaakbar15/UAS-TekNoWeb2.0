import React, { useState } from "react";
import Layout from "../../Layouts/Defautls";

// import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function CreateBarang({errors}) {
    const [nama_barang, setNamaBarang] = useState("");
    const [merek, setMerek] = useState("");
    const [harga, setHarga] = useState("");
    const [stok, setStok] = useState("");

    // Function to handle form submission
    const storeBarang = async (e) => {
        e.preventDefault();

        Inertia.post("/barang", {
            nama_barang: nama_barang,
            merek: merek,
            harga: harga,
            stok: stok
        });
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Tambah Barang</h1>
                <div className="card-body">
                    <form onSubmit={storeBarang}>
                        <div className="mb-3">
                            <label className="form-label">Nama Barang</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama_barang"
                                value={nama_barang}
                                onChange={(e) => setNamaBarang(e.target.value)}
                            />
                            <div id="nama_barang" className="form-text">
                                Masukan nama Barang
                            </div>
                        </div>

                        {errors.nama_barang && (
                            <div className="alert alert-danger">
                                {errors.nama_barang}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Merek</label>
                            <input
                                type="text"
                                className="form-control"
                                id="merek"
                                value={merek}
                                onChange={(e) => setMerek(e.target.value)}
                            />
                            <div id="merek" className="form-text">
                                Masukan merek barang
                            </div>
                        </div>

                        {errors.merek && (
                            <div className="alert alert-danger">
                                {errors.merek}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Harga</label>
                            <input
                                type="text"
                                className="form-control"
                                id="harga"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                            />
                            <div id="harga" className="form-text">
                                Masukan harga barang
                            </div>
                        </div>

                        {errors.harga && (
                            <div className="alert alert-danger">
                                {errors.harga}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Stok Barang</label>
                            <input
                                type="text"
                                className="form-control"
                                id="stok"
                                value={stok}
                                onChange={(e) => setStok(e.target.value)}
                            />
                            <div id="stok" className="form-text">
                                Masukan Stok Barang
                            </div>
                        </div>

                        {errors.stok && (
                            <div className="alert alert-danger">
                                {errors.stok}
                            </div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                            >
                                SAVE
                            </button>
                            <button type="reset" className="btn btn-primary">
                                RESET
                            </button>
                        </div>
                    </form>
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
        </Layout>
    );
}
