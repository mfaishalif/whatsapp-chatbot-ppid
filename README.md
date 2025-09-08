# Information Service System with Chatbot

## Description

This system is designed to streamline the process of information requests between **Users (information requesters)** and **Admins (information providers)** through an interactive chatbot. With this approach, communication flows become faster, more structured, and properly documented.

---

## System Usage Flow

### User (Information Requester)

1. **General Inquiry via Chatbot**  
   - If the information is available → the chatbot directly provides the answer.  
   - If the information is not available, or if the user wishes to submit an information request → the chatbot directs the user to the request form.  

2. **Form Submission Options**  
   - **Manual:** The chatbot provides a registration link to the request form for the user to complete independently.  
   - **Guided (Interactive):** The chatbot asks the form questions step-by-step and automatically submits the responses to the system.  

3. **Receiving the Request Outcome**  
   - If approved → the user receives the requested document/information through the chatbot.  
   - If rejected → the user receives the reason for rejection as delivered by the chatbot.  

---

### Admin (Information Provider)

1. **Access the Admin Dashboard** to view the list of incoming information requests.  
2. **Process Requests:**  
   - **Approve:** The admin uploads the requested document/information, which is then forwarded to the chatbot for delivery to the user.  
   - **Reject:** The admin provides a reason for rejection, which the chatbot communicates to the user.  
3. **Manage Information Database:**  
   - Admins can add, update, or remove information available to the chatbot through the web dashboard.  

---

## Core System Components

- **Chatbot** → The main interaction channel between users and the system.  
- **Information Request Form** → Used by users to submit formal information requests.  
- **Admin Dashboard** → A management interface for processing requests and maintaining the information database.  
- **Request Documentation** → Every request and response is logged for auditing and transparency purposes.  

---

## Benefits

- **For Users:** Simplifies the process of requesting information with clear guidance.  
- **For Admins:** Provides an efficient, centralized dashboard for managing requests.  
- **For Organizations:** Ensures transparency, accountability, and efficiency in public information services.  
