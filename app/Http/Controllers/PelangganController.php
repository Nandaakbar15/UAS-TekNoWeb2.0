<?php

namespace App\Http\Controllers;

use App\Models\pelanggan;
use App\Http\Requests\StorepelangganRequest;
use App\Http\Requests\UpdatepelangganRequest;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pelanggan = Pelanggan::latest()->get();

        return inertia('Pelanggan/indexcustomer',[
            'pelanggan' => $pelanggan
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Pelanggan/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorepelangganRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate
        $request->validate([
            'nama' => 'required',
            'umur' => 'required',
            'alamat' => 'required',
            'nomor_telepon' => 'required'
        ]);

        // insert data
        Pelanggan::create([
            'nama' => $request->input('nama'),
            'umur' => $request->input('umur'),
            'alamat' => $request->input('alamat'),
            'nomor_telepon' => $request->input('nomor_telepon'),
        ]);

        return redirect()->route('pelanggan.indexcustomer')->with('success', 'Data pelanggan berhasil di tambah!');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function show(pelanggan $pelanggan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function edit(pelanggan $pelanggan)
    {
        return inertia('Pelanggan/Edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatepelangganRequest  $request
     * @param  \App\Models\pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, pelanggan $pelanggan)
    {
         // validate
        $request->validate([
            'nama' => 'required',
            'umur' => 'required',
            'alamat' => 'required',
            'nomor_telepon' => 'required'
        ]);

        Pelanggan::update([
            'nama' => $request,
            'umur' => $request,
            'alamat' => $request,
            'nomor_telepon' => $request
        ]);

        return redirect()->route('pelanggan.indexcustomer')->with('success', 'Data berhasil di update!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\pelanggan  $pelanggan
     * @return \Illuminate\Http\Response
     */
    public function destroy(pelanggan $pelanggan)
    {
        $pelanggan->delete();

        return redirect()->route('pelanggan.indexcustomer')->with('success', 'Data berhasil dihapus!');
    }
}
