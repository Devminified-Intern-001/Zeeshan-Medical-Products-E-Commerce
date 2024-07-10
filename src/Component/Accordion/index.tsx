import { ReactNode } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
interface IAccordionProps {
  className?: string;
  heading?: string;
  children?: ReactNode;
}

const RcAccordion = (props: IAccordionProps) => {
  const { className, heading, children } = props;
  return (
    <div className={className}>
      <Accordion allowZeroExpanded={true} >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3>{heading}</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{children}</AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RcAccordion;
