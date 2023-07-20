import React from "react";
import Layout from "../../Layouts/Defautls";

// import Link
import { Link } from "@inertiajs/inertia-react";

// import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function Barang({barang, session}) {

    const deleteBarang = async (id) => {
        Inertia.delete(`/barang/${id}`);
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Data Barang</h1>
                <div className="card-body">
                    <Link href="/barang/create">
                        <button className="btn btn-success mb-2">
                            Tambah Barang
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
                                <th>Nama Barang</th>
                                <th>Merek</th>
                                <th>Harga</th>
                                <th>Stok</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nama Barang</th>
                                <th>Merek</th>
                                <th>Harga</th>
                                <th>Stok</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {barang.map((barang, index) => (
                                <tr key={index}>
                                    <td>{barang.nama_barang}</td>
                                    <td>{barang.merek}</td>
                                    <td>{barang.harga}</td>
                                    <td>{barang.stok}</td>
                                    <td className="text-center">
                                        <Link href={`/barang/${barang.id}/edit`}>
                                            <img
                                                src="/img/edit.png"
                                                width={"60px"}
                                                height={"60px"}
                                                alt="edit"
                                            />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                deleteBarang(barang.id)
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
