<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Http\Requests\StoreBarangRequest;
use App\Http\Requests\UpdateBarangRequest;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $barang = Barang::latest()->get();

        return inertia('Barang/Indexbarang', [
            'barang' => $barang
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Barang/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBarangRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //set validate
        $request->validate([
            'nama_barang' => 'required',
            'merek' => 'required',
            'harga' => 'required',
            'stok' => 'required'
        ]);

        Barang::create([
            'nama_barang' => $request->nama_barang,
            'merek' => $request->merek,
            'harga' => $request->harga,
            'stok' => $request->stok
        ]);

        return redirect()->route('barang.indexbarang')->with('success', 'Data barang berhasil ditambah!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function show(Barang $barang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function edit(Barang $barang)
    {
        return inertia('Barang/Edit', [
            'barang' => $barang
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBarangRequest  $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Barang $barang)
    {
        // validate
        $request->validate([
            'nama_barang' => 'required',
            'merek' => 'required',
            'harga' => 'required',
            'stok' => 'required|integer'
        ]);

        $barang->update([
            'nama_barang' => $request->input('nama_barang'),
            'merek' => $request->input('merek'),
            'harga' => $request->input('harga'),
            'stok' => $request->input('stok'),
        ]);

        return redirect()->route('barang.indexbarang')->with('success', 'Data berhasil di update!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Barang $barang)
    {
        $barang->delete();

        return redirect()->route('barang.indexbarang')->with('success', 'Data barang berhasil didelete!');
    }
}
