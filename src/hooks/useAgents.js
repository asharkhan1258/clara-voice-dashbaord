import { useState, useCallback } from "react";
import { activeAgents as initialAgents } from "../data/mockData";

export const useAgents = () => {
  const [agents, setAgents] = useState(initialAgents);

  const updateAgentStatus = useCallback((agentId, isActive) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === agentId ? { ...agent, isActive } : agent
      )
    );
  }, []);

  const addAgent = useCallback((newAgent) => {
    setAgents((prevAgents) => [...prevAgents, { ...newAgent, id: Date.now() }]);
  }, []);

  const removeAgent = useCallback((agentId) => {
    setAgents((prevAgents) =>
      prevAgents.filter((agent) => agent.id !== agentId)
    );
  }, []);

  return {
    agents,
    updateAgentStatus,
    addAgent,
    removeAgent,
  };
};
