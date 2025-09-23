import { css } from 'lit';

export const sharedStyles = css`
  :host {
    display: block;
    font-family: 'Roboto', Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .calendar-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  /* Header Styles */
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
  }

  .navigation-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .header-button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .header-button:hover {
    background-color: #0d62d9;
  }

  .header-button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  .current-month {
    font-size: 22px;
    font-weight: 500;
    color: #3c4043;
    margin: 0 20px;
  }

  .view-buttons {
    display: flex;
    gap: 5px;
  }

  .view-button {
    background-color: transparent;
    color: #5f6368;
    border: 1px solid #dadce0;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  }

  .view-button.active {
    background-color: #1a73e8;
    color: white;
    border-color: #1a73e8;
  }

  .view-button:hover:not(.active) {
    background-color: #f8f9fa;
  }

  /* Grid Styles */
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    background-color: #e0e0e0;
    border: 1px solid #e0e0e0;
  }

  .day-header {
    background-color: #f8f9fa;
    padding: 12px;
    text-align: center;
    font-weight: 500;
    color: #5f6368;
  }

  .calendar-day {
    background-color: white;
    min-height: 120px;
    padding: 8px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .calendar-day.other-month {
    background-color: #f8f9fa;
    color: #9aa0a6;
  }

  .calendar-day.today {
    background-color: #e8f0fe;
  }

  .calendar-day:hover {
    background-color: #f5f5f5;
  }

  .day-number {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .events-container {
    max-height: 90px;
    overflow-y: auto;
  }

  .event {
    font-size: 12px;
    padding: 2px 4px;
    margin-bottom: 2px;
    border-radius: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .event:hover {
    opacity: 0.8;
  }

  .more-events {
    font-size: 12px;
    color: #1a73e8;
    margin-top: 5px;
    cursor: pointer;
    font-weight: 500;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: white;
    padding: 24px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .modal-title {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    color: #3c4043;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #5f6368;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-button:hover {
    background-color: #f5f5f5;
    border-radius: 50%;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #3c4043;
  }

  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  .form-input:focus {
    outline: none;
    border-color: #1a73e8;
  }

  .form-textarea {
    min-height: 80px;
    resize: vertical;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }

  .action-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .save-button {
    background-color: #1a73e8;
    color: white;
  }

  .save-button:hover {
    background-color: #0d62d9;
  }

  .delete-button {
    background-color: #d93025;
    color: white;
  }

  .delete-button:hover {
    background-color: #c5221f;
  }

  .cancel-button {
    background-color: #f8f9fa;
    color: #3c4043;
    border: 1px solid #dadce0;
  }

  .cancel-button:hover {
    background-color: #e8f0fe;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .calendar-header {
      flex-direction: column;
      gap: 15px;
      padding: 15px;
    }
    
    .navigation-buttons {
      width: 100%;
      justify-content: space-between;
    }
    
    .view-buttons {
      width: 100%;
      justify-content: center;
    }
    
    .calendar-day {
      min-height: 80px;
    }
    
    .current-month {
      font-size: 18px;
      margin: 10px 0;
    }
  }

  @media (max-width: 480px) {
    :host {
      padding: 10px;
    }
    
    .calendar-day {
      min-height: 60px;
      padding: 4px;
    }
    
    .day-number {
      font-size: 12px;
    }
    
    .event {
      font-size: 10px;
      padding: 1px 2px;
    }
  }
`;
