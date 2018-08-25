import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import pdfDocument from '../../public/PDF/dummyPDF.pdf'

const ResumePage = () => (
  <div className="resumePage">
   <Document file={pdfDocument}>
   <Page pageNumber={1}/>
   <a href={pdfDocument} download>download a copy</a>
   </Document>
  </div>
);

export default ResumePage;