import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import pdfDocument from '../../public/PDF/dummyPDF.pdf'

const ResumePage = () => (
    <div>
  <a href={pdfDocument} download>download a copy</a>
   <Document className="resumePage" file={pdfDocument}>
   <Page pageNumber={1}/>
   <Page pageNumber={1}/>
   </Document>
  </div>
);

export default ResumePage;