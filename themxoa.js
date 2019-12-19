let arr = [['baohoa.gif', 'Video: Báo hoa mai phản ứng thần tốc, bật nhảy tóm gọn linh dương impala trên không trung', 'Thứ 7, 09/11/2019 | 14:05', 'Bị báo hoa mai truy đuổi, con linh dương impala cố nhảy qua đầu kẻ săn mồi để trốn thoá nhưng không ngờ đối phương cũng là một kẻ nhào lộn nổi tiếng, cuối cùng đành bỏ mạng dưới nanh vuốt của con báo nhanh nhẹn', 'trang1.html'],

    ['tegiac.gif', 'Đàn linh cẩu hợp sức quây con mồi khổng lồ tê giác', 'Thứ 2, 16/12/2019 | 09:00', 'Kết cục nào cho con tê giác tội nghiệp bị loài đi săn cơ hội - linh cẩu hợp sức tấn công.','trang2.html'
    ],
    ['chome.gif', 'Xúc động cảnh chó mẹ bị gãy chân vẫn cố tìm người giải cứu 13 con chó con', ' Thứ 2, 16/12/2019 | 20:30', 'Một con chó mẹ bị gãy chân nhưng đã cố gắng dẫn đường cho nhân viên cứu hộ tới cứu 13 con chó con. Trước đó, con chó mẹ đã giấu kỹ đàn con của mình dưới bụi rậm.'],

    ['ran.gif', 'Giải mã bí ẩn: Vì sao rắn hổ mang hay nhắm vào mắt người để phun nọc độc', 'Thứ 2, 16/12/2019 | 21:00', 'Bạn biết rằng, loài rắn phun nọc là để bảo vệ chính mình. Thế nhưng, rắn hổ mang luôn nhắm vào mắt đối phương - một cơ quan cực kỳ dễ bị tổn thương. Tại sao chúng lại làm như vậy?'],
    ,
    ['baosanmoi.gif', 'Thế giới động vật: Màn đáp trả cực gắt của con mồi khiến báo hoa mai “thương tích” đầy mình', 'Thứ 5, 31/10/2019 | 17:23', 'Đàn cá mắc kẹt trong vũng nước cạn, báo hoa mai phi thân vồ gọn con mồi nào ngờ con mồi “phản đòn” mạnh mẽ khiến toàn thân dính bùn'],

    ['ongcu.gif', 'Thế giới động vật: Kinh hoàng cảnh trăn 5m quấn cổ cụ ông 70 tuổi', 'Thứ 4, 23/10/2019 | 18:00', 'Tung mình khỏi tay của những người thuộc ban quản lý rừng, con trăn dài 5m quấn chặt cổ cụ ông 70 tuổi khiến ai cũng hốt hoảng.']

        ['camatnguoi.gif', '“Hú hồn” phát hiện cá có khuôn mặt người ở Trung Quốc', 'Thứ 2, 11/11/2019 | 12:00', 'Phát hiện một con cá chép có mắt, mũi và miệng giống với khuôn mặt người khu vực Tây Nam, Trung Quốc gây xôn xao.']]


function hienthimang() {
    let str = "<ul>";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            str += "<li>";
            str += "<img src=" + arr[i][0] + " height=\"80\" width=\"160\">"
                + "<h2><a href='" + arr[i][4] + "'>" + arr[i][1] + "</a></h2>" + arr[i][2] + "<br><br>" + arr[i][3] + "<br><br>"
                + "<br><br>";
            str += "</li>";
        } else {
            continue;
        }
    }
    return str;
}


function themvaomang() {
    cout = arr.length;
    arr[cout] = [];
    arr[cout].push(document.getElementById("link_img").value);
    arr[cout].push(document.getElementById("title").value);
    arr[cout].push(document.getElementById("price").value);
    arr[cout].push(document.getElementById("comtent").value);
}

function laymangsua() {
    let sttsua = document.getElementById("stt_sua").value;
    document.getElementById("link_img").value = arr[sttsua][0];
    document.getElementById("title").value = arr[sttsua][1];
    document.getElementById("price").value = arr[sttsua][2];
    document.getElementById("comtent").value = arr[sttsua][3];
}

function suamang() {
    let sttsua = document.getElementById("stt_sua").value;
    let linkimg = document.getElementById("link_img").value;
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let comtent = document.getElementById("comtent").value;

    arr[sttsua][0] = linkimg;
    arr[sttsua][1] = title;
    arr[sttsua][2] = price;
    // arr[sttsua][3] = view;
    arr[sttsua][3] = comtent;

    document.getElementById("hienthi").innerHTML = hienthimang();
}

function delete_arr() {
    let sttsua = document.getElementById("stt_sua").value;
    arr.splice(sttsua, 1);
    document.getElementById("hienthi").innerHTML = hienthimang();
}