import { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { firestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

const ManagePolicy = () => {
  const policiesRef = firestore.collection("policyPage");
  const { policyPageItems, policyPageDetails } = useFirestore("policyPage");
  const [subtitle, setSubtitle] = useState(null);
  const [addForm, setAddForm] = useState(null);
  const [updateForm, setUpdateForm] = useState(null);
  const [successAdd, setSuccessAdd] = useState(null);
  const [errorAdd, setErrorAdd] = useState(null);
  const [successSubtitle, setSuccessSubtitle] = useState(null);
  const [errorSubtitle, setErrorSubtitle] = useState(null);
  const [successUpdate, setSuccessUpdate] = useState(null);
  const [errorUpdate, setErrorUpdate] = useState(null);
  const [final, setFinal] = useState(null);
  const [size, setSize] = useState(null);
  const addPolicy = document.getElementById("addPolicy");

  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
    setErrorAdd(null);
  };

  useEffect(() => {
    policyPageItems && setFinal(policyPageItems[policyPageItems.length - 1]);
    policyPageItems && setSize(policyPageItems.length);
  }, [policyPageItems]);

  const pushPolicy = (order) => {
    policiesRef
      .doc("policies")
      .collection("policyItems")
      .add({ ...addForm, orderNum: order })
      .then(() => {
        setSuccessAdd("New Policy has been successfully added");
        addPolicy.reset();
        setTimeout(() => setSuccessAdd(null), 5000);
      })
      .catch((err) => {
        console.error(err);
        setErrorAdd(err.message);
        setTimeout(() => setErrorAdd(null), 10000);
      });
  };

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSize(policyPageItems.length);
    setFinal(policyPageItems[policyPageItems.length - 1]);
    let num;
    if (addForm && final.orderNum) {
      if (size >= final.orderNum && final.orderNum) {
        num = size + 1;
        pushPolicy(num);
      } else {
        num = final.orderNum + 1;
        pushPolicy(num);
      }
    }
  };

  const handlePolicyUpdateClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (updateForm) {
      policiesRef
        .doc("policies")
        .collection("policyItems")
        .doc(id)
        .set(updateForm, { merge: true })
        .then(() => {
          setSuccessUpdate("Update was successful");
          setTimeout(() => setSuccessUpdate(null), 5000);
        })
        .catch((err) => {
          console.error(err);
          setErrorUpdate(err.message);
        });
    }
  };

  const handleUpdatePolicyForm = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const handlePolicyDeleteClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    policiesRef
      .doc("policies")
      .collection("policyItems")
      .doc(id)
      .delete()
      .then(() => {
        setSuccessUpdate("Delete was successful");
        setTimeout(() => setSuccessUpdate(null), 5000);
      })
      .catch((err) => {
        console.error(err);
        setErrorUpdate(err.message);
      });
  };

  const handleUpdateSubtitleForm = (e) => {
    const { name, value } = e.target;
    setSubtitle({ [name]: value });
  };

  const handlePolicySubtitleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (subtitle) {
      policiesRef
        .doc("policyPageDetails")
        .set(subtitle, { merge: true })
        .then(() => {
          setSuccessSubtitle("Update was successful");
          setTimeout(() => setSuccessSubtitle(null), 5000);
        })
        .catch((err) => {
          console.error(err);
          setErrorSubtitle(err.message);
        });
    }
  };
  return (
    <Container>
      <Row>
        <Col className="text-center m-5">
          <h4>Manage Policy Page</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="text-center mt-5">
              <h4>Edit Policy Page Subtitle</h4>
            </Col>
          </Row>
          <Row>
            <Col className="success m-1 text-center">
              <p>{successSubtitle}</p>
            </Col>
          </Row>
          <Row>
            <Col className="error m-1 text-center">
              <p>{errorSubtitle}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="mt-1" onChange={handleUpdateSubtitleForm}>
                <Row>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Edit Page Subtitle</Form.Label>
                      <Form.Control
                        defaultValue={
                          policyPageDetails &&
                          policyPageDetails.policyPageSubtitle
                        }
                        as="textarea"
                        name="policyPageSubtitle"
                      />
                    </Form.Group>
                  </Col>
                  <Col className="text-end">
                    <Button
                      size="sm"
                      onClick={(e) => handlePolicySubtitleClick(e)}
                      className="mt-3"
                    >
                      Update Policy Page Subtitle
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-5">
              <h4>Edit Policies</h4>
              <h6>
                <em>
                  You can edit anyone of the fields and click update. If you
                  would like to delete a policy completely click delete.
                </em>
              </h6>
            </Col>
          </Row>

          {policyPageItems &&
            policyPageItems.map((policyItem) => (
              <Form
                className="mt-1"
                key={policyItem.id}
                onChange={handleUpdatePolicyForm}
              >
                <Row>
                  {/* <Col >
                    <Form.Group>
                      
                    </Form.Group>
                  </Col> */}
                  <Col className="text-end">
                    <InputGroup>
                      <Form.Control
                        defaultValue={policyItem.policy}
                        as="textarea"
                        name="policy"
                      />
                      <Button
                        size="sm"
                        onClick={(e) =>
                          handlePolicyUpdateClick(e, policyItem.id)
                        }
                        variant="secondary"
                      >
                        Update
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) =>
                          handlePolicyDeleteClick(e, policyItem.id)
                        }
                        variant="secondary"
                      >
                        Delete
                      </Button>
                    </InputGroup>
                  </Col>
                  {/* <Col className="text-end">
                   
                  </Col> */}
                </Row>
              </Form>
            ))}
        </Col>
      </Row>
      <Row>
        <Col className="success m-1 text-center">
          <p>{successUpdate}</p>
        </Col>
      </Row>
      <Row>
        <Col className="error m-1 text-center">
          <p>{errorUpdate}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="text-center mt-5">
              <h4>Add New Policies</h4>
            </Col>
          </Row>
          <Form id="addPolicy" onChange={handleAddFormChange}>
            <Form.Group>
              <Form.Label>Add New Policy</Form.Label>
              <Form.Control name="policy" as="textarea" />
              <Form.Text>
                New policies added will be appended to the bottom of the list.
              </Form.Text>
            </Form.Group>
            <Row>
              <Col className="text-end">
                <Button className="mt-3" onClick={handleAddFormSubmit}>
                  Add New Policy
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col className="success mt-3 text-center">
              <p>{successAdd}</p>
            </Col>
          </Row>
          <Row>
            <Col className="error mt-3 text-center">
              <p>{errorAdd}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ManagePolicy;
