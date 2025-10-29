<!-- <template>
    <div>
        <h1>About Us</h1>
    </div>
</template>

<script>
export default {
    name: "AboutUsComponent",
}
</script> -->

<template>
  <section class="bg-gray-50 py-12">
    <div class="container mx-auto px-4 lg:px-12">
      <!-- Header Section -->
      <div class="text-center mb-10">
        <h1 class="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
          Your Nutrifood: Inovasi Gizi Teruji, Makanan Sehat Masa Depan
        </h1>
        <p class="text-gray-700 text-lg">
          Selamat datang di <span class="font-semibold">Your Nutrifood</span> – Tempat Bertemunya Ilmu dan Rasa.
        </p>
      </div>

      <!-- Hero Image -->
      <div class="flex justify-center mb-10">
        <img
          src="/images/FOTO-1.jpeg"
          alt="Your Nutrifood"
          class="rounded-2xl shadow-lg w-full max-w-4xl object-cover"
        />
      </div>

      <!-- Description -->
      <div class="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-6">
        <p>
          Kami bukan sekadar dapur produksi biasa. Kami adalah
          <strong>"Bengkel Kewirausahaan"</strong> yang didukung penuh oleh Mahasiswa dan Dosen Jurusan Gizi
          Poltekkes Malang, didirikan pada <strong>3 Agustus 2024</strong> sebagai wujud nyata Pengabdian Masyarakat di bidang Gizi.
        </p>

        <p>
          Your Nutrifood adalah perpaduan unik antara riset ilmiah gizi dan kreativitas kuliner, yang bertekad menciptakan solusi
          makanan dan minuman yang benar-benar sehat, bergizi optimal, dan terjamin keamanannya.
        </p>

        <!-- Section: Why Choose -->
        <h2 class="text-2xl font-bold text-green-700 mt-10 mb-4">
          Mengapa Anda Harus Memilih Your Nutrifood?
        </h2>

        <ol class="list-decimal ml-6 space-y-4">
          <li>
            <strong>Dibuat oleh Para Ahli Gizi Tersertifikasi</strong><br />
            Produk Anda dibuat dan diawasi oleh tim ahli yang sesungguhnya. Your Nutrifood didukung oleh lebih dari 30 Dosen
            Jurusan Gizi Poltekkes Malang yang handal, dengan latar belakang di empat pilar utama:
            <ul class="list-disc ml-6 mt-2">
              <li>Gizi Klinik – memastikan kandungan nutrisi optimal.</li>
              <li>Gizi Masyarakat – merancang produk yang relevan dan terjangkau.</li>
              <li>Gizi Institusi – menjamin standar keamanan produksi.</li>
              <li>Bidang Pangan – menguasai teknologi pengolahan pangan berkualitas.</li>
            </ul>
          </li>

          <li>
            <strong>Kualitas Teruji & Terstandardisasi Ilmiah</strong><br />
            Kami tidak hanya mengklaim sehat, kami membuktikannya! Produk kami telah melalui uji laboratorium nasional, riset dosen, dan beberapa bahkan mengantongi izin edar PIRT & BPOM.
          </li>

          <li>
            <strong>Nutrisi yang Didesain Khusus untuk Kebutuhan Anda</strong><br />
            Diciptakan untuk mahasiswa & staf Poltekkes Malang, produk kami memberikan energi, fokus, dan daya tahan prima bagi aktivitas harian Anda.
          </li>
        </ol>

        <p class="italic font-semibold text-center text-gray-800 mt-6">
          Pesan Sekarang dan Rasakan Perbedaan Makanan yang Dibuat dengan Ilmu!
        </p>

        <!-- Call to Action -->
        <div class="bg-green-100 p-6 rounded-xl text-center mt-8">
          <p class="font-medium">
            “Tinggalkan makanan instan yang diragukan gizinya. Beralih ke Your Nutrifood, di mana setiap produknya
            diformulasikan langsung oleh 30+ Dosen Gizi Poltekkes Malang.”
          </p>
        </div>

        <!-- Visi & Misi -->
        <h2 class="text-2xl font-bold text-green-700 mt-10 mb-4">Visi dan Misi</h2>

        <h3 class="text-xl font-semibold mt-4">Visi</h3>
        <p>
          “Menjadi Pusat Inovasi Gizi dan Edutainment terdepan di lingkungan Poltekkes se-Indonesia, yang menghasilkan produk
          makanan dan minuman sehat, aman, dan bergizi berdasarkan riset ilmiah.”
        </p>

        <h3 class="text-xl font-semibold mt-4">Misi</h3>
        <ol class="list-decimal ml-6 space-y-2">
          <li>Mewujudkan Ekosistem Pembelajaran-Bisnis (Bengkel Kewirausahaan).</li>
          <li>Menjamin Kualitas Produk Berstandar Ilmiah.</li>
          <li>Mengembangkan Kapasitas SDM (Mahasiswa, Alumni, Dosen).</li>
          <li>Menyebarkan Kesadaran Gizi kepada masyarakat luas.</li>
        </ol>

        <!-- Symbolism -->
        <h3 class="text-xl font-semibold mt-8">Makna Logo Your Nutrifood</h3>
        <ul class="list-disc ml-6 space-y-1">
          <li>Bahan makanan real food: melambangkan makanan bergizi dan aman.</li>
          <li>Alat ukur (metlin): simbol pengendalian berat badan & kesehatan.</li>
          <li>Kedua tangan: gestur menyokong kesehatan melalui konsumsi makanan bijak.</li>
          <li>Tulisan “Your Nutrifood”: keputusan terbaik memilih produk kami.</li>
        </ul>

        <!-- Address -->
        <div class="bg-white p-6 rounded-lg shadow-md mt-10">
          <h3 class="text-xl font-bold text-green-700 mb-2">Alamat Kami</h3>
          <p><strong>YOUR NUTRIFOOD</strong></p>
          <p>Poltekkes Malang Jurusan Gizi</p>
          <p>Jl. Besar Ijen no. 77C</p>
          <p>WA: <a href="https://wa.me/628175707804" class="text-green-600 font-semibold">08175707804 (Fifi)</a></p>
        </div>
      </div>

      <!-- 4 Info Boxes (divisi / kategori) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div
          v-for="(item, index) in infoBoxes"
          :key="index"
          class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-32 h-16 object-contain mb-4"
          />
          <h4 class="font-bold text-lg mb-2">{{ item.title }}</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUsComponent",
  data() {
    return {
      infoBoxes: [
        {
          title: "NUTRIFOOD RESEARCH",
          image: "/images/FOTO-2.jpeg",
          description:
            "Divisi riset dan inovasi gizi yang mengembangkan produk makanan sehat berbasis penelitian ilmiah.",
        },
        {
          title: "NUTRIFOOD EDU",
          image: "/images/FOTO-3.jpeg",
          description:
            "Bergerak di bidang edukasi dan pelatihan gizi, mendukung mahasiswa dan masyarakat memahami pentingnya nutrisi.",
        },
        {
          title: "NUTRIFOOD PRODUCT",
          image: "/images/FOTO-4.jpeg",
          description:
            "Fokus pada pengembangan dan produksi makanan serta minuman sehat dengan standar kualitas tinggi.",
        },
        {
          title: "NUTRIFOOD FOUNDATION",
          image: "/images/FOTO-5.jpeg",
          description:
            "Mengabdi kepada masyarakat melalui kegiatan sosial dan penyuluhan gizi untuk meningkatkan kesadaran kesehatan.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

  