import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import Vue from 'vue'
export default {
  install (Vue, options) {
    Vue.prototype.getPdf = function (Title) {
      let title =Title
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: true,
      }).then(function (canvas) {
          let contentWidth = canvas.width
          console.log("contentWidth:"+contentWidth)
          let contentHeight = canvas.height
          console.log("contentHeight:"+contentHeight);
          let pageHeight = contentWidth / 592.28 * 841.89;
          console.log("pageHeight:"+pageHeight)
          let leftHeight = contentHeight
          console.log("leftHeight:"+leftHeight)
          let position = 0
          const imgWidth = 595.28
          let imgHeight = 592.28 / contentWidth * contentHeight
          console.log("imgHeight:"+imgHeight)
          let pageData = canvas.toDataURL('image/png', 1.0)
          let PDF = new JsPDF('', 'pt', 'a4')
          console.log("imgWidth:"+imgWidth)
          if (leftHeight < pageHeight) {
            PDF.addImage(pageData, 'png', 0, 10, imgWidth, imgHeight)
          } else {
            while (leftHeight > 0) {
              PDF.addImage(pageData, 'png', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight
              position -= 841.89
              if (leftHeight > 0) {
                PDF.addPage()
              }
            }
          }
          PDF.save(title + '.pdf')
        }
      )
    }
  }
}
