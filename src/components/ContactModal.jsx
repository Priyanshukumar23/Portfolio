import React from 'react';
import { User, Mail, Phone, MessageSquare, Send, X, Headphones } from 'lucide-react';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate send
        alert("Message sent successfully!");
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">
                        <Headphones size={32} className="modal-title-icon" />
                        Get In <span className="highlight" style={{ color: 'var(--accent-purple)' }}>Touch</span>
                    </h2>
                </div>

                <div className="modal-body">
                    <div className="modal-image-container">
                        <img src="/contact_illustration.png" alt="Get in touch illustration" className="modal-hero-image" />
                    </div>

                    <div className="modal-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-group">
                                <User className="input-icon" size={18} />
                                <input type="text" placeholder="Name" required />
                            </div>

                            <div className="input-group">
                                <Mail className="input-icon" size={18} />
                                <input type="email" placeholder="Email" required />
                            </div>

                            <div className="input-group">
                                <Phone className="input-icon" size={18} />
                                <input type="tel" placeholder="Phone" />
                            </div>

                            <div className="input-group textarea-group">
                                <MessageSquare className="input-icon" size={18} />
                                <textarea placeholder="Message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className="submit-btn" style={{ background: 'var(--accent-purple)', borderColor: 'var(--accent-purple)' }}>
                                Submit <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
