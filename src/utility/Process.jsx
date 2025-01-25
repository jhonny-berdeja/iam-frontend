import React, { useEffect, useState } from 'react';
import { MDBAccordion, MDBAccordionItem, MDBSpinner } from 'mdb-react-ui-kit';

export default function Process({ itemsData, indicateStartProcess }) {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isContinuing, setIsContinuing] = useState(false);
  const [greenItems, setGreenItems] = useState(new Set());
  const [spinners, setSpinners] = useState(new Set());

  useEffect(() => {
    if (itemsData) {
      setItems(itemsData);
    }
  }, [itemsData]);

  useEffect(() => {
    if (indicateStartProcess) {
      handleCreate();
    }
  }, [indicateStartProcess]);

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

        {visibleCount <= 1 && items.slice(0, 1).map((item, index) => (
          <MDBAccordionItem 
            key={index}
            collapseId={index + 1}
            headerTitle={
              <div className="d-flex justify-content-between align-items-center">
                <span>{index + 1} - {item.title}</span>  
              </div>
            }
            className='text-white bg-dark'
          >
            {renderContent(item.content)}
          </MDBAccordionItem>
        ))}

        {visibleCount > 1 &&
          items.slice(0, visibleCount).map((item, index) => (
            <MDBAccordionItem 
              key={index}
              collapseId={index + 1}
              headerTitle={
                <div className="d-flex justify-content-between align-items-center">
                  <span>{index + 1} - {item.title}</span>
                  {spinners.has(index + 1) && <MDBSpinner color='light' style={{ marginLeft: '10px' }} />}
                </div>
              }
              className={greenItems.has(index + 1) ? 'text-white bg-success' : 'text-white bg-dark'}
            >
              {renderContent(item.content)}
            </MDBAccordionItem>
          ))
        }
      </MDBAccordion>
    </div>
  );
}
