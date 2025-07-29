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
      <div className="py-6 mb-2">
        <h3 className="text-3xl font-semibold tracking-tight" style={{ color: 'var(--apple-gray-900)' }}>Active Agents</h3>
      </div>
      <div className="apple-card rounded-3xl overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="apple-glass" style={{ background: 'rgba(248, 250, 252, 0.8)' }}>
                <tr>
                  <th
                    scope="col"
                    className="px-8 py-6 text-left text-lg font-semibold tracking-tight"
                    style={{ color: 'var(--apple-gray-900)' }}
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-6 text-left text-lg font-semibold tracking-tight"
                    style={{ color: 'var(--apple-gray-900)' }}
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-6 text-left text-lg font-semibold tracking-tight"
                    style={{ color: 'var(--apple-gray-900)' }}
                  >
                    Phone Number
                  </th>
                  <th
                    scope="col"
                    className="px-8 py-6 text-left text-lg font-semibold tracking-tight"
                    style={{ color: 'var(--apple-gray-900)' }}
                  >
                    Active
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ divideColor: 'var(--apple-gray-100)' }}>
                {activeAgents.map((agent) => (
                  <tr key={agent.id} className="transition-all duration-150 ease-out hover:bg-gray-50/60">
                    <td className="px-8 py-6 whitespace-nowrap text-lg font-medium" style={{ color: 'var(--apple-gray-900)' }}>
                      {agent.name}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg" style={{ color: 'var(--apple-gray-700)' }}>
                      {agent.department}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg font-mono" style={{ color: 'var(--apple-gray-700)' }}>
                      {agent.phoneNumber}
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">
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
          <div className="px-8 py-4 apple-glass border-t hidden" style={{ borderColor: 'var(--apple-gray-100)', background: 'rgba(248, 250, 252, 0.8)' }}>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl text-lg font-medium text-white transition-all duration-200 ease-out hover:scale-105 active:scale-95"
              style={{ background: 'var(--apple-blue-500)' }}
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
