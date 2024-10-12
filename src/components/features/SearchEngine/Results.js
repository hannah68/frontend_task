import React from "react";
import {
  ResultContainer,
  Resultsfooter,
  ResultsMain,
  ResultsHeader,
  SortResult,
  Card,
  CardFooter,
  CardBottom,
  CardTitle,
  CardDate,
} from "./styles";
import Dropdown from "../../common/Dropdown";
import Pagination from "../../common/Pagination";

export default function Results() {
  return (
    <ResultContainer>
      <ResultsHeader>
        <div>
          <h1>Results</h1>
          <p>Showing results 1-5 of 615.</p>
        </div>
        <SortResult>
          <Dropdown options={[]} value={[]} onChange={() => undefined} />
          <Dropdown options={[]} value={[]} onChange={() => undefined} />
        </SortResult>
      </ResultsHeader>
      <ResultsMain>
        <Card>
          <CardDate>Nov 18 2022</CardDate>
          <CardTitle>Title heree</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consectetur deleniti voluptatem vel
            perferendis quibusdam eos, animi voluptate nulla tenetur laudantium molestias a, assumenda corrupti omnis
            magnam. Aperiam, saepe numquam?
          </p>
          <CardFooter>
            <CardBottom>
              <span>Category</span>
              <span>Banking</span>
            </CardBottom>
            <CardBottom>
              <span>Decision</span>
              <span>Upheald</span>
            </CardBottom>
            <CardBottom>
              <span>Company</span>
              <span>Barclays bank Plc</span>
            </CardBottom>
          </CardFooter>
        </Card>

        <Card>
          <CardDate>Nov 18 2022</CardDate>
          <CardTitle>Title heree</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consectetur deleniti voluptatem vel
            perferendis quibusdam eos, animi voluptate nulla tenetur laudantium molestias a, assumenda corrupti omnis
            magnam. Aperiam, saepe numquam?
          </p>
          <CardFooter>
            <CardBottom>
              <span>Category</span>
              <span>Banking</span>
            </CardBottom>
            <CardBottom>
              <span>Decision</span>
              <span>Upheald</span>
            </CardBottom>
            <CardBottom>
              <span>Company</span>
              <span>Barclays bank Plc</span>
            </CardBottom>
          </CardFooter>
        </Card>

        <Card>
          <CardDate>Nov 18 2022</CardDate>
          <CardTitle>Title heree</CardTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, consectetur deleniti voluptatem vel
            perferendis quibusdam eos, animi voluptate nulla tenetur laudantium molestias a, assumenda corrupti omnis
            magnam. Aperiam, saepe numquam?
          </p>
          <CardFooter>
            <CardBottom>
              <span>Category</span>
              <span>Banking</span>
            </CardBottom>
            <CardBottom>
              <span>Decision</span>
              <span>Upheald</span>
            </CardBottom>
            <CardBottom>
              <span>Company</span>
              <span>Barclays bank Plc</span>
            </CardBottom>
          </CardFooter>
        </Card>
      </ResultsMain>
      <Resultsfooter>
        <Pagination data={[]} itemsPerPage={3} />
      </Resultsfooter>
    </ResultContainer>
  );
}
