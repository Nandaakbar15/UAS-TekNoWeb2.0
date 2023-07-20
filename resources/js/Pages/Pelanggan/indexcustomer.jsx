import React from "react";
import Layout from "../../Layouts/Defautls";

// import Link
import { Link } from "@inertiajs/inertia-react";

// import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Pelanggan({ pelanggan, session }) {
    const deletePelanggan = async (id) => {
        Inertia.delete(`/pelanggan/${id}`);
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Data Pelanggan</h1>
                <div className="card-body">
                    <Link href="/pelanggan/create">
                        <button className="btn btn-success mb-2">
                            Tambah Pelanggan
                        </button>
                    </Link>
                    {session.success && (
                        <div className="alert alert-success border-0 shadow-sm rounded-3">
                            {session.success}
                        </div>
                    )}
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Nama Pelanggan</th>
                                <th>Umur</th>
                                <th>Alamat</th>
                                <th>Nomor Telepon</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nama Pelanggan</th>
                                <th>Umur</th>
                                <th>Alamat</th>
                                <th>Nomor Telepon</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {pelanggan.map((pelanggan, index) => (
                                <tr key={index}>
                                    <td>{pelanggan.nama}</td>
                                    <td>{pelanggan.umur}</td>
                                    <td>{pelanggan.alamat}</td>
                                    <td>{pelanggan.nomor_telepon}</td>
                                    <td className="text-center">
                                        <Link
                                            href={`/pelanggan/${pelanggan.id}/edit`}
                                        >
                                            <img
                                                src="/img/edit.png"
                                                width={"60px"}
                                                height={"60px"}
                                                alt="edit"
                                            />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                deletePelanggan(pelanggan.id)
                                            }
                                        >
                                            <img
                                                src="/img/delete.png"
                                                width={"40px"}
                                                height={"40px"}
                                                alt="delete"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
