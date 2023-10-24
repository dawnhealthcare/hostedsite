import React, { useState } from 'react';
import { MinusICon, PlusICon } from '../Icons';
import Para from '../Para';
import { FaqHeader, FaqWrapper, Question } from './styles';
import { Link } from 'react-router-dom';

const Faq = ({
  question,
  answer,
  index,
  openIndex,
  setOpenIndex,
  className,
}) => {
  const isOpen = index === openIndex;

  const toggleAnswer = () => {
    setOpenIndex(isOpen ? -1 : index);
  };

  return (
    <FaqWrapper
      className={`${className} wow animate__animated animate__zoomIn`}
    >
      <FaqHeader onClick={toggleAnswer}>
        <Question>{question}</Question>
        {isOpen ? (
          <MinusICon className="icon" />
        ) : (
          <PlusICon className="icon" />
        )}
      </FaqHeader>
      {isOpen && answer}
    </FaqWrapper>
  );
};

const FaqList = (props) => {
  const { className } = props;
  const faqs = [
    {
      id: 334455,
      question: 'What is a virtual wellness mental health model?',
      answer: (
        <Para className="mt-4">
          A virtual wellness mental health model is an approach to mental health
          care that uses virtual technology to provide mental health support and
          services remotely.
        </Para>
      ),
    },
    {
      id: 334456,
      question: <span>What types of services does Dawn Health provide?</span>,
      answer: (
        <Para className="mt-4">
          Our care delivery model provides a wide range of mental health
          services, including same-day pre-crisis intervention, therapy, and
          counseling, as well as a peer community network for parents and care
          navigation.
        </Para>
      ),
    },
    {
      id: 334457,
      question: 'Is virtual mental health care as effective as in-person care?',
      answer: (
        <Para className="mt-4">
          Yes, studies have shown that virtual mental health care can be just as
          effective as in-person care for many mental health conditions.
        </Para>
      ),
    },
    {
      id: 334458,
      question:
        'What are the benefits of using a virtual wellness mental health model?',
      answer: (
        <Para className="mt-4">
          The benefits of a virtual wellness mental health model include
          increased access to care, greater convenience, reduced stigma, and the
          ability to receive care from the comfort of your own home.
        </Para>
      ),
    },
    {
      id: 334459,
      question: 'What technology is required for virtual mental health care?',
      answer: (
        <Para className="mt-4">
          To access virtual mental health care, you will need a computer or
          mobile device with a camera and microphone, as well as a reliable
          internet connection.
        </Para>
      ),
    },
    {
      id: 334460,
      question:
        'How can I find a mental health professional who offers virtual care?',
      answer: (
        <Para className="mt-4">
          You will not have to worry about that. Our care navigation team will
          handle all this for you and your child. We will ensure you know your
          insurance coverage and out-of-pocket costs up-front and also arrange
          any and all necessary appointments that fit your child's and family's
          schedule.
        </Para>
      ),
    },
    {
      id: 334461,
      question:
        'How do I ensure the privacy and security of my virtual mental health sessions?',
      answer: (
        <Para className="mt-4">
          Virtual sessions are conducted through a secure and encrypted platform
          to ensure the privacy and security of your personal health
          information. Furthermore, our team conducts any communication through
          encrypted means to ensure compliance with HIPAA laws.
        </Para>
      ),
    },
    {
      id: 334462,
      question: 'How do I prepare for a virtual mental health session?',
      answer: (
        <Para className="mt-4">
          Before your virtual mental health session, make sure you have a quiet
          and private space where you can speak openly with your mental health
          professional. Test your technology beforehand and make sure you have
          any necessary documents or information on hand.
        </Para>
      ),
    },
    {
      id: 334463,
      question: (
        <span>
          What is going to be the total annual cost to receive care through Dawn
          Health?
        </span>
      ),
      answer: (
        <>
          {/* <Para className="mt-4">
            Embrace a pathway to wellness and resilience with Dawn Health at an
            investment tailored to nurture your mental wellbeing! Our annual
            subscription is $499.00, plus a minimal transaction fee. Should your
            personalized care plan activate the Mental Health Resilience
            Pathway, each therapy session will be $155.00 and each health
            coaching $80.00, plus a small transaction fee.
          </Para>
          <Para className="mt-2">
            Imagine a world where support, growth, and health are accessible,
            wrapped in a package designed to fit seamlessly into your life.
            These costs aren't mere expenses; they're stepping stones towards a
            life filled with strength, positivity, and happiness. Take the leap
            with us, and discover the transformation that awaits you!
          </Para> */}
          {/* <ul>
            <li className="mb-2">$500 annual subscription fee</li>
          </ul> */}
          {/* <Para className="mt-4">Mental Health Resilience Pathway:</Para> */}
          <ul className="mt-4">
            <li className="mb-2">
              Less than a daily gourmet coffee: It's like trading a fancy latte
              for the well-being of your child.
            </li>
            <li className="mb-2">
              Comparable to a monthly family dinner out: Instead of one night
              out, you're nourishing your child's mental health all month long.
            </li>
            <li className="mb-2">
              The cost of a new outfit or pair of brand-name sneakers: It's an
              investment in confidence and success, not just style.
            </li>
            <li className="mb-2">
              Similar to your monthly streaming or cable bill: Imagine
              exchanging endless channels for endless possibilities in your
              child's life.
            </li>
          </ul>
          <Para className="mt-4">
            Isn't your child's mental growth, happiness, and success worth it?
            With our program, you're not just spending; you're investing in a
            lifetime of resilience and fulfillment. Join us now and take a
            purposeful step toward a vibrant future for your child
          </Para>
          <Para className="mt-4">
            By placing the cost in the context of everyday expenses, this
            comparison makes the investment seem more manageable and worthwhile,
            and it connects directly with the values and priorities that parents
            can understand and appreciate.
          </Para>
        </>
      ),
    },
    // {
    //   id: 334464,
    //   question: (
    //     <span>
    //       How does the cost to receive care from Dawn Health compare to other
    //       household expense items?
    //     </span>
    //   ),
    //   answer: (
    //     <>
    //       <ul className="mt-4">
    //         <li className="mb-2">
    //           Less than a daily gourmet coffee: It's like trading a fancy latte
    //           for the wellbeing of your child.
    //         </li>
    //         <li className="mb-2">
    //           Comparable to a monthly family dinner out: Instead of one night
    //           out, you're nourishing your child's mental health all month long.
    //         </li>
    //         <li className="mb-2">
    //           The cost of a new outfit or pair of brand-name sneakers: It's an
    //           investment in confidence and success, not just style.
    //         </li>
    //         <li className="mb-2">
    //           Similar to your monthly streaming or cable bill: Imagine
    //           exchanging endless channels for endless possibilities in your
    //           child's life.
    //         </li>
    //       </ul>
    //       <Para className="mt-4">
    //         Isn't your child's mental growth, happiness, and success worth it?
    //         With our program, you're not just spending; you're investing in a
    //         lifetime of resilience and fulfillment. Join us now and take a
    //         purposeful step towards a vibrant future for your child
    //       </Para>
    //       <Para className="mt-2">
    //         By placing the cost in the context of everyday expenses, this
    //         comparison makes the investment seem more manageable and worthwhile,
    //         and it connects directly with the values and priorities that parents
    //         can understand and appreciate.
    //       </Para>
    //     </>
    //   ),
    // },
    {
      id: 334465,
      question: 'How do I sign up?',
      answer: (
        <Para className="mt-4">
          It's easy. Only parents/guardians can{' '}
          <Link to="/signup">Sign Up</Link> for their child. Please, go to the
          sign-up page and fill out the required information. You will receive a
          follow-up text message to finalize the registration process.
        </Para>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div>
      {faqs.map((faq, index) => (
        <Faq
          key={faq.id}
          index={index}
          className={className}
          question={faq.question}
          answer={faq.answer}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default FaqList;
