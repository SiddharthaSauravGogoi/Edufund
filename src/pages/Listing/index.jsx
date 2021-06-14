import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search/index.jsx";
import { fetchAllMutualFunds } from "../../services/dataService";
import Navigation from "../../components/Navbar/index";
import {
  setMFData,
  setMFSearchResults,
  setMFSearchTerm,
} from "../../redux/actions/mfActions";
import CardComponent from "../../components/Card";

export default function Listing() {
  const dispatch = useDispatch();

  const allMF = useSelector((state) => state.mutualFundData.allMutualFunds);
  const searchTerm = useSelector((state) => state.mutualFundData.searchTerm);
  const fiveMFData = useSelector(
    (state) => state.mutualFundData.fiveMutualFunds
  );

  useEffect(() => {
    const getMutualFunds = fetchAllMutualFunds();

    getMutualFunds.then((response) => {
      let schemes = [];
      for (let i = 0; i < 5; i++) {
        schemes.push(response.data[i]);
      }
      let allMutualFunds = response.data;
      let fiveMutualFunds = schemes;

      let mfData = {
        allMutualFunds,
        fiveMutualFunds,
      };
      dispatch(setMFData(mfData));
    });
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(setMFSearchTerm(event.target.value));
  };

  useEffect(() => {
    if (searchTerm.length >= 2) {
      let filteredResults = allMF.filter((item) =>
        item.schemeName.toLowerCase().startsWith(searchTerm)
      );
      dispatch(setMFSearchResults(filteredResults));
    }
  }, [searchTerm, allMF, dispatch]);

  return (
    <Container>
      <Navigation />
      <Row>
        <Col style={{ position: "relative" }}>
          <Search searchTerm={searchTerm} handleChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          {fiveMFData.map((scheme) => (
            <CardComponent scheme={scheme} key={scheme.schemeName} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
