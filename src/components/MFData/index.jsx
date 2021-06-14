import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMFData } from "../../services/dataService";
import Navigation from "../Navbar";
import MetaData from "./MetaData";
import { setSchemeData } from "../../redux/actions/mfActions";

export default function MFData() {
  const params = useParams();
  const schemeData = useSelector((state) => state.mutualFundData.schemeData);
  const dispatch = useDispatch();
  const { scheme } = params;
  useEffect(() => {
    const getMFData = fetchMFData(scheme);
    getMFData.then((response) => {
      dispatch(setSchemeData(response.data));
    });
  }, [scheme, dispatch]);
  return (
    <Container>
      <Navigation />
      <Row>
        <Col>
          <MetaData schemeData={schemeData.meta} />
        </Col>
      </Row>
    </Container>
  );
}
