package com.example.demo.Contact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private final ContactRepository ContactRepository;

    @Autowired
    ContactService(ContactRepository ContactRepository) {
        this.ContactRepository = ContactRepository;
    }

    public Contact createContact(Contact contact) {
        return this.ContactRepository.save(contact);
    }

    public List<Contact> getContact() {
        return this.ContactRepository.findAll();
    }

    public void deleteContact(Integer id) {
        ContactRepository.deleteById(id);
    }

    public Contact getContactById(Integer id) {
        return this.ContactRepository.findById(id).orElse(new Contact());
    }

    public Contact editContactById(Integer id, Contact contact) {
        Contact contactById = this.ContactRepository.findById(id).orElse(null);
        if (contact.getName() != null) {
            contactById.setName(contact.getName());
        }
        if (contact.getEmail() != null) {
            contactById.setEmail(contact.getEmail());
        }
        if (contact.getJop() != null) {
            contactById.setJop(contact.getJop());
        }
        if (contact.getLocation() != null) {
            contactById.setLocation(contact.getLocation());
        }
        if (contact.getPhone() != null) {
            contactById.setPhone(contact.getPhone());
        }
        if (contact.getStatus() != null) {
            contactById.setStatus(contact.getStatus());
        }
        Contact updatedContact = this.ContactRepository.save(contactById);

        return updatedContact;
    }

}