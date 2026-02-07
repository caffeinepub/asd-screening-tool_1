export interface MChatQuestion {
  id: number;
  text: string;
  criticalItem: boolean;
}

export const mchatQuestions: MChatQuestion[] = [
  {
    id: 1,
    text: "Jika Anda menunjuk sesuatu di seberang ruangan, apakah anak Anda melihatnya?",
    criticalItem: true
  },
  {
    id: 2,
    text: "Pernahkah Anda bertanya-tanya apakah anak Anda tuli?",
    criticalItem: false
  },
  {
    id: 3,
    text: "Apakah anak Anda bermain pura-pura atau berpura-pura? (misalnya, berpura-pura minum dari cangkir kosong, berpura-pura berbicara di telepon, atau berpura-pura memberi makan boneka atau mainan lain)",
    criticalItem: true
  },
  {
    id: 4,
    text: "Apakah anak Anda suka memanjat benda? (misalnya, furnitur, peralatan taman bermain, atau tangga)",
    criticalItem: false
  },
  {
    id: 5,
    text: "Apakah anak Anda membuat gerakan tangan yang tidak biasa di dekat matanya? (misalnya, apakah anak Anda menggerakkan jari-jarinya di dekat matanya?)",
    criticalItem: true
  },
  {
    id: 6,
    text: "Apakah anak Anda menunjuk dengan satu jari untuk meminta sesuatu atau untuk mendapatkan bantuan? (misalnya, menunjuk makanan ringan atau mainan yang tidak dapat dijangkau)",
    criticalItem: true
  },
  {
    id: 7,
    text: "Apakah anak Anda menunjuk dengan satu jari untuk menunjukkan sesuatu yang menarik kepada Anda? (misalnya, menunjuk pesawat terbang di langit atau truk besar di jalan)",
    criticalItem: true
  },
  {
    id: 8,
    text: "Apakah anak Anda tertarik pada anak-anak lain? (misalnya, apakah anak Anda memperhatikan anak-anak lain, tersenyum pada mereka, atau mendekati mereka?)",
    criticalItem: false
  },
  {
    id: 9,
    text: "Apakah anak Anda menunjukkan sesuatu kepada Anda dengan membawanya kepada Anda atau mengangkatnya agar Anda melihatnya - bukan untuk mendapatkan bantuan, tetapi hanya untuk berbagi dengan Anda? (misalnya, menunjukkan bunga, boneka binatang, atau truk mainan)",
    criticalItem: true
  },
  {
    id: 10,
    text: "Apakah anak Anda merespons ketika Anda memanggil namanya? (misalnya, apakah dia melihat ke atas, berbicara atau mengoceh, atau berhenti melakukan apa yang dia lakukan?)",
    criticalItem: true
  },
  {
    id: 11,
    text: "Ketika Anda tersenyum pada anak Anda, apakah dia tersenyum kembali kepada Anda?",
    criticalItem: false
  },
  {
    id: 12,
    text: "Apakah anak Anda kesal dengan suara sehari-hari? (misalnya, apakah anak Anda berteriak atau menangis karena suara seperti penyedot debu atau musik keras?)",
    criticalItem: false
  },
  {
    id: 13,
    text: "Apakah anak Anda berjalan?",
    criticalItem: false
  },
  {
    id: 14,
    text: "Apakah anak Anda menatap mata Anda ketika Anda berbicara dengannya, bermain dengannya, atau mendandaninya?",
    criticalItem: true
  },
  {
    id: 15,
    text: "Apakah anak Anda mencoba meniru apa yang Anda lakukan? (misalnya, melambaikan tangan selamat tinggal, bertepuk tangan, atau membuat suara lucu ketika Anda melakukannya)",
    criticalItem: false
  },
  {
    id: 16,
    text: "Jika Anda menoleh untuk melihat sesuatu, apakah anak Anda melihat sekeliling untuk melihat apa yang Anda lihat?",
    criticalItem: false
  },
  {
    id: 17,
    text: "Apakah anak Anda mencoba membuat Anda melihatnya? (misalnya, apakah anak Anda melihat Anda untuk pujian, atau mengatakan \"lihat\" atau \"lihat saya\"?)",
    criticalItem: false
  },
  {
    id: 18,
    text: "Apakah anak Anda memahami ketika Anda memberi tahu dia untuk melakukan sesuatu? (misalnya, jika Anda tidak menunjuk, apakah anak Anda memahami \"letakkan buku di kursi\" atau \"bawakan saya selimut\"?)",
    criticalItem: false
  },
  {
    id: 19,
    text: "Jika sesuatu yang baru terjadi, apakah anak Anda melihat wajah Anda untuk melihat bagaimana perasaan Anda tentang hal itu? (misalnya, jika dia mendengar suara aneh atau lucu, atau melihat mainan baru, apakah dia melihat wajah Anda?)",
    criticalItem: false
  },
  {
    id: 20,
    text: "Apakah anak Anda menyukai kegiatan bergerak? (misalnya, diayun atau dipantulkan di lutut Anda)",
    criticalItem: false
  }
];
