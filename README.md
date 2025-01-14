# Server Monitoring Application / Sunucu İzleme Uygulaması

## Overview / Genel Bakış
This application allows system administrators to monitor, manage, and analyze their servers in real-time. It provides a user-friendly interface for adding/removing servers, managing SSH keys, and viewing server statistics.
Bu uygulama, sistem yöneticilerinin sunucularını gerçek zamanlı olarak izlemelerine, yönetmelerine ve analiz etmelerine olanak tanır. Sunucu ekleme/çıkarma, SSH anahtarlarını yönetme ve sunucu istatistiklerini görüntüleme için kullanıcı dostu bir arayüz sunar.

## User Actions and Behaviors / Kullanıcı Eylemleri ve Davranışları

### User Management / Kullanıcı Yönetimi
- **Register / Kayıt Ol**: Users can create an account to access the application.
  Kullanıcılar, uygulamaya erişmek için bir hesap oluşturabilir.
- **Login / Giriş Yap**: Users can log in to their account using their credentials.
  Kullanıcılar, kimlik bilgilerini kullanarak hesaplarına giriş yapabilir.
- **Logout / Çıkış Yap**: Users can securely log out of the application.
  Kullanıcılar, uygulamadan güvenli bir şekilde çıkış yapabilir.

### Server Management / Sunucu Yönetimi
- **Add Server / Sunucu Ekle**: Users can add new servers by providing necessary details and SSH keys.
  Kullanıcılar, gerekli bilgileri ve SSH anahtarlarını sağlayarak yeni sunucular ekleyebilir.
- **Remove Server / Sunucu Kaldır**: Users can remove servers from their list.
  Kullanıcılar, listelerinden sunucuları kaldırabilir.
- **View Server Status / Sunucu Durumunu Görüntüle**: Users can view real-time status and metrics of their servers.
  Kullanıcılar, sunucularının gerçek zamanlı durumunu ve metriklerini görüntüleyebilir.

### Monitoring / İzleme
- **View Metrics / Metrikleri Görüntüle**: Users can monitor CPU, memory, disk usage, network traffic, and system load of each server.
  Kullanıcılar, her sunucunun CPU, bellek, disk kullanımı, ağ trafiği ve sistem yükünü izleyebilir.
- **Real-time Updates / Gerçek Zamanlı Güncellemeler**: Users receive real-time updates on server performance.
  Kullanıcılar, sunucu performansı hakkında gerçek zamanlı güncellemeler alır.

### UI Interaction / Arayüz Etkileşimi
- **Drag & Drop / Sürükle ve Bırak**: Users can rearrange server tiles on the dashboard using drag & drop.
  Kullanıcılar, kontrol panelinde sunucu kutucuklarını sürükleyip bırakarak yeniden düzenleyebilir.
- **Theme Selection / Tema Seçimi**: Users can switch between dark and light themes.
  Kullanıcılar, koyu ve açık temalar arasında geçiş yapabilir.

### Dashboard / Kontrol Paneli
- **Filter and Search / Filtreleme ve Arama**: Users can filter and search for specific servers.
  Kullanıcılar, belirli sunucular için filtreleme ve arama yapabilir.
- **Color Coding / Renk Kodlaması**: Users can easily identify server status through color-coded indicators.
  Kullanıcılar, renk kodlu göstergeler aracılığıyla sunucu durumunu kolayca tanımlayabilir.
- **Menu Bar / Menü Çubuğu**: Users can access account settings and add new servers via the menu bar.
  Kullanıcılar, menü çubuğu aracılığıyla hesap ayarlarına erişebilir ve yeni sunucular ekleyebilir.

## Installation / Kurulum
1. Clone the repository.
   Depoyu klonlayın.
2. Navigate to the `/api` directory and run `npm install` to install backend dependencies.
   `/api` dizinine gidin ve backend bağımlılıklarını yüklemek için `npm install` komutunu çalıştırın.
3. Navigate to the `/client` directory and run `npm install` to install frontend dependencies.
   `/client` dizinine gidin ve frontend bağımlılıklarını yüklemek için `npm install` komutunu çalıştırın.
4. Set up MongoDB and configure environment variables.
   MongoDB'yi kurun ve ortam değişkenlerini yapılandırın.
5. Run the backend server using `npm start` in the `/api` directory.
   `/api` dizininde `npm start` komutunu kullanarak backend sunucusunu çalıştırın.
6. Run the frontend server using `npm run serve` in the `/client` directory.
   `/client` dizininde `npm run serve` komutunu kullanarak frontend sunucusunu çalıştırın.

## Contributing / Katkı
Contributions are welcome! Please read the contributing guidelines before submitting a pull request.
Katkılar memnuniyetle karşılanır! Lütfen bir pull request göndermeden önce katkı yönergelerini okuyun.

## License / Lisans
This project is licensed under the MIT License.
Bu proje MIT Lisansı altında lisanslanmıştır. 

Ensar Uysal
