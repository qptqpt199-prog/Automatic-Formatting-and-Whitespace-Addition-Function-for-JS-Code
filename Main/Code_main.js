function formatJSSpaces(code) {
  if (!code) return "";
  
  return code
    // Thu gọn khoảng trắng thừa
    .replace(/\s+/g, " ")
    // Thêm khoảng trắng sau từ khóa điều kiện
    .replace(/\b(if|for|while|switch|catch)\s*\(/g, "$1 (")
    // Thêm khoảng trắng quanh các toán tử
    .replace(/([=+\-*/<>!&|]=?)/g, " $1 ")
    // Chuẩn hóa dấu phẩy và chấm phẩy
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s*;\s*/g, "; ")
    // Chuẩn hóa dấu ngoặc nhọn
    .replace(/\s*\{\s*/g, " { ")
    .replace(/\s*\}\s*/g, " } ")
    // Dọn dẹp lại các khoảng trắng kép phát sinh
    .replace(/\s{2,}/g, " ")
    .trim();
}

// Ví dụ sử dụng:
const messyCode = "let x=10;if(x>5){console.log(x);}";
console.log(formatJSSpaces(messyCode));
// Kết quả: let x = 10; if ( x > 5 ) { console.log ( x ); }
