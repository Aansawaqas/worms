import React from 'react';

export function Dmca() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">DMCA Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Copyright Infringement Notice</h2>
            <p className="text-gray-600">
              If you believe that content available through VideoMaster Pro infringes one or more of your copyrights, please notify us by submitting a written notice containing the information described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Required Information</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>A physical or electronic signature of the copyright owner</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing</li>
              <li>Contact information for the complaining party</li>
              <li>A statement that the complaining party has a good faith belief that use of the material is not authorized</li>
              <li>A statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600">
              DMCA notices can be sent to our designated copyright agent at:<br />
              Email: dmca@videomaster.pro<br />
              Address: 123 Editor Street, CA 94105
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Counter Notification</h2>
            <p className="text-gray-600">
              If you believe your content was removed in error, you may file a counter notification. Please consult legal counsel before filing a counter notification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}