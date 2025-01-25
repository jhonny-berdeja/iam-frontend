import React, { useEffect, useState } from 'react';
import { MDBAccordion, MDBAccordionItem, MDBSpinner } from 'mdb-react-ui-kit';
import itemsData from './identity-creation-process.json'; 

export default function Process({ onCreate }) {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isContinuing, setIsContinuing] = useState(false);
  const [greenItems, setGreenItems] = useState(new Set());
  const [spinners, setSpinners] = useState(new Set());

  useEffect(() => {
    setItems(itemsData);
  }, []);

  useEffect(() => {
    if (onCreate) {
      handleCreate();
    }
  }, [onCreate]);

  useEffect(() => {
    if (isContinuing && visibleCount < items.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prevCount) => prevCount + 1);
        setSpinners((prev) => new Set(prev).add(visibleCount + 1));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isContinuing, visibleCount, items.length]);

  useEffect(() => {
    if (spinners.has(visibleCount)) {
      const spinnerTimer = setTimeout(() => {
        setSpinners((prev) => {
          const newSet = new Set(prev);
          newSet.delete(visibleCount);
          return newSet;
        });
        setGreenItems((prev) => new Set(prev).add(visibleCount));
      }, 500);
      return () => clearTimeout(spinnerTimer);
    }
  }, [visibleCount, spinners]);

  const handleCreate = () => {
    setIsContinuing(true);
  };

  // Recursivo para manejar la lista de items, incluidos los anidados
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((subItem, subIndex) => (
            <li key={subIndex}>
              <strong>{subItem.title}:</strong> {subItem.content}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>{content}</p>;
    }
  };

  return (
    <div>
      <MDBAccordion borderless initialActive={1}>
        {items.slice(0, 3).map((item, index) => (
          <MDBAccordionItem 
            key={index}
            collapseId={index + 1}
            headerTitle={
              <div className="d-flex justify-content-between align-items-center">
                <span>{index + 1} - {item.title}</span>
              </div>
            }
            className='text-white bg-success'
          >
            {renderContent(item.content)}
          </MDBAccordionItem>
        ))}

        {visibleCount <= 4 && items.slice(3, 4).map((item, index) => (
          <MDBAccordionItem 
            key={index + 3}
            collapseId={index + 4}
            headerTitle={
              <div className="d-flex justify-content-between align-items-center">
                <span>{index + 4} - {item.title}</span>  
              </div>
            }
            className='text-white bg-dark'
          >
            {renderContent(item.content)}
          </MDBAccordionItem>
        ))}

        {visibleCount > 4 &&
          items.slice(3, visibleCount).map((item, index) => (
            <MDBAccordionItem 
              key={index + 3}
              collapseId={index + 5}
              headerTitle={
                <div className="d-flex justify-content-between align-items-center">
                  <span>{index + 4} - {item.title}</span>
                  {spinners.has(index + 4) && <MDBSpinner color='light' style={{ marginLeft: '10px' }} />}
                </div>
              }
              className={greenItems.has(index + 4) ? 'text-white bg-success' : 'text-white bg-dark'}
            >
              {renderContent(item.content)}
            </MDBAccordionItem>
          ))
        }
      </MDBAccordion>
    </div>
  );
}
