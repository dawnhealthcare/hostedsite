import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { ActionWrapper, ViewerWrapper } from './styles';
import { ArrowIcon } from '../Icons';
import { Col, Row } from 'react-bootstrap';

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { path, pageConunt } = props;

  return (
    <ViewerWrapper>
      {/* <Row>
        <Col
          md={{ span: 10, offset: 1 }}
          className="d-flex justify-content-center position-relative"
        > */}
      <Document
        file={path}
        options={{ workerSrc: '/pdf.worker.js' }}
        onLoadSuccess={onDocumentLoadSuccess}
        className="d-flex justify-content-center w-100"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <ActionWrapper>
        <button
          className="rounded-btn"
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button
          className="rounded-btn"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <ArrowIcon />
        </button>
      </ActionWrapper>
      {pageConunt && (
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
      )}
      {/* </Col>
      </Row> */}
    </ViewerWrapper>
  );
}
