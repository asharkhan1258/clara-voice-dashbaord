import React from "react";
import { useForm } from "react-hook-form";
import { activeAgents } from "../../data/mockData";
import Toggle from "../UI/Toggle";

const ActiveAgentsTable = () => {
  const { handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      agents: activeAgents.reduce((acc, agent) => {
        acc[agent.id] = agent.isActive;
        return acc;
      }, {}),
    },
  });

  const watchedAgents = watch("agents");

  const handleToggleChange = (agentId, newValue) => {
    setValue(`agents.${agentId}`, newValue);

    console.log(`Agent ${agentId} status changed to: ${newValue}`);
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <section>
      <div className="py-5">
        <h3 className="text-3xl font-semibold text-gray-900">Active Agents</h3>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-white divide-y border-b divide-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-base font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-base font-semibold text-gray-900"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-base font-semibold text-gray-900"
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-5 text-left text-base font-semibold text-gray-900"
                  >
                    Active
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeAgents.map((agent) => (
                  <tr key={agent.id} className="hover:bg-gray-50">
                    <td className="px-6 py-5 whitespace-nowrap text-base font-medium text-gray-900">
                      {agent.name}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-gray-700">
                      {agent.department}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-gray-700">
                      {agent.phoneNumber}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-base text-gray-700">
                      <Toggle
                        enabled={watchedAgents[agent.id] || false}
                        onChange={handleToggleChange}
                        id={agent.id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 hidden">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ActiveAgentsTable;
