import React, { useState } from "react";
import Layout from "../../Layouts/Defautls";

// import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function UpdateBarang({ errors, pelanggan }) {
    const [nama, setNama] = useState(pelanggan.nama);
    const [umur, setUmur] = useState(pelanggan.umur);
    const [alamat, setAlamat] = useState(pelanggan.alamat);
    const [nomor_telepon, setNomorTelepon] = useState(pelanggan.nomor_telepon);

    // Function to handle form submission
    const updatePelanggan = async (e) => {
        e.preventDefault();

        Inertia.put(`/pelanggan/${pelanggan.id}`, {
            nama: nama,
            umur: umur,
            alamat: alamat,
            nomor_telpon: nomor_telepon,
        });
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Update Pelanggan</h1>
                <div className="card-body">
                    <form onSubmit={updatePelanggan}>
                        <div className="mb-3">
                            <label className="form-label">Nama Pelanggan</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <div id="nama" className="form-text">
                                Masukan nama Pelanggan
                            </div>
                        </div>

                        {errors.nama && (
                            <div className="alert alert-danger">
                                {errors.nama}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Umur</label>
                            <input
                                type="text"
                                className="form-control"
                                id="umur"
                                value={umur}
                                onChange={(e) => setUmur(e.target.value)}
                            />
                            <div id="umur" className="form-text">
                                Masukan umur pelanggan
                            </div>
                        </div>

                        {errors.umur && (
                            <div className="alert alert-danger">
                                {errors.umur}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Alamat</label>
                            <input
                                type="text"
                                className="form-control"
                                id="alamat"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                            <div id="alamat" className="form-text">
                                Masukan alamat pelanggan
                            </div>
                        </div>

                        {errors.alamat && (
                            <div className="alert alert-danger">
                                {errors.alamat}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Nomor Telepon</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nomor_telepon"
                                value={nomor_telepon}
                                onChange={(e) => setNomorTelepon(e.target.value)}
                            />
                            <div id="nomor_telepon" className="form-text">
                                Masukan Nomor Telepon
                            </div>
                        </div>

                        {errors.nomor_telepon && (
                            <div className="alert alert-danger">
                                {errors.nomor_telepon}
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
