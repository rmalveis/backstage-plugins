import { createPermission } from '@backstage/plugin-permission-common';

export const viewOverviewPermission = createPermission({
  name: 'kyverno.overview.view',
  attributes: { action: 'read' },
});

export const viewPolicyYAMLPermission = createPermission({
  name: 'kyverno.policy.view-yaml',
  attributes: { action: 'read' },
});

export const showKyvernoReportsPermission = createPermission({
  name: 'kyverno.reports.view',
  attributes: { action: 'read' },
});


export const kyvernoPermissions = [showKyvernoReportsPermission, viewOverviewPermission, viewPolicyYAMLPermission];