const alamat='http://localhost/php-mvc/12/public';

$(function() {

	$('.tombolTambahData').on('click', function() {	
		$('#formModalLabel').html('Tambah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('Tambah Data');
				$('#nama').val(null);
				$('#nrp').val(null);
				$('#email').val(null);
				$('#jurusan').val(null);
	});

	$('.tampilModalUbah').on('click', function() {	
		$('#formModalLabel').html('Ubah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('Ubah Data');
		$('.modal-body form').attr('action', `${alamat}/mahasiswa/ubah`);

		const id = $(this).data('id');

		$.ajax ({
			url:`${alamat}/mahasiswa/getubah`,
			data: {id:id},
			method: 'post',
			dataType: 'json',
			success: function(data) {
				$('#nama').val(data.nama);
				$('#nrp').val(data.nrp);
				$('#email').val(data.email);
				$('#jurusan').val(data.jurusan);
				$('#id').val(data.id);
			}
		});

	});

});